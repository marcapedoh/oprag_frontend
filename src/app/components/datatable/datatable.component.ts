import { Component, Input } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged, map, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input() data!: Array<any>;
  @Input() columns!: Array<any>
  @Input() dataType!: string;
  filteredData: any = []
  numberData: number = 20
  inputSubject = new Subject<string>();
  subscription!: Subscription;
  filteredElements: any = []
  testSubscription!: Subscription;
  warningBoolean:boolean=false
  
  ngOnInit(): void {
    setTimeout(() => {
      if (this.data && this.data.length > 0) {
        this.updateNumber()
      }
      
    }, 1500)
    
    this.subscription = this.inputSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(searchText => {
        if (!searchText.trim()) return this.getRandomItems(this.data, this.numberData);

        const lowerSearch = searchText.toString().toLowerCase();
        if (this.dataType == "cs") {
          this.filteredElements = this.filteredData.filter((item: any) =>
            item.name.toLowerCase().includes(lowerSearch) ||
            item.status.toLowerCase().includes(lowerSearch) ||
            item.title.toLowerCase().includes(lowerSearch) ||
            item.callDropCount.toString().includes(lowerSearch) ||
            item.failureAmount.toString().includes(lowerSearch) ||
            item.latency.toString().includes(lowerSearch) ||
            item.luFailuresCount.toString().includes(lowerSearch) ||
            item.smsFailuresCount.toString().includes(lowerSearch)

          );
        } else if (this.dataType == "ott") {
          this.filteredElements = this.filteredData.filter((item: any) =>
            item.name.toLowerCase().includes(lowerSearch) ||
            item.ottName.toLowerCase().includes(lowerSearch) ||
            item.status.toLowerCase().includes(lowerSearch) ||
            item.title.toLowerCase().includes(lowerSearch) ||
            item.pageResponseDelay.toString().includes(lowerSearch) ||
            item.synAckAckDelay.toString().includes(lowerSearch) ||
            item.synSynAckDelay.toString().includes(lowerSearch) ||
            item.totalTrafficMb.toString().includes(lowerSearch) ||
            item.webPageDlThroughput.toString().includes(lowerSearch)

          );
        } else if (this.dataType == "ps") {
          this.filteredElements = this.filteredData.filter((item: any) =>
            item.name.toLowerCase().includes(lowerSearch) ||
            item.status.toLowerCase().includes(lowerSearch) ||
            item.title.toLowerCase().includes(lowerSearch) ||
            item.attachFailuresCount.toString().includes(lowerSearch) ||
            item.gyFailuresCount.toString().includes(lowerSearch) ||
            item.pingPongCount.toString().includes(lowerSearch)
          );
        }else{
          this.filteredElements = this.filteredData.filter((item: any) =>
            item.name.toLowerCase().includes(lowerSearch) ||
            item.status.toLowerCase().includes(lowerSearch) ||
            item.title.toLowerCase().includes(lowerSearch) ||
            item.dnsDelay.toString().includes(lowerSearch) ||
            item.dnsFailuresCount.toString().includes(lowerSearch) ||
            item.synAckAckDelay.toString().includes(lowerSearch) ||
            item.synSynAckDelay.toString().includes(lowerSearch) ||
            item.totalTrafficMb.toString().includes(lowerSearch)
          );
        }
        // filtre selon les champs que tu veux
        return this.filteredElements
      })
    ).subscribe(filtered => {
      this.filteredData = filtered;
    });

  }

  startWarningWatcher() {
    if (this.testSubscription) {
      this.testSubscription.unsubscribe(); // éviter les multiples abonnements
    }
  
    this.testSubscription = interval(2500).pipe(
      take(10),
      tap(() => {
        const warningFound = this.filteredData.some((item: any) => item.status === 'WARNING');
        console.log('Warning found:', warningFound);
        if (warningFound) {
          this.warningBoolean = !this.warningBoolean;
          console.log('⚠️ WARNING detected');
        }
      })
    ).subscribe();
  }
  
  ngOnDestroy(): void {
    if (this.testSubscription) {
      this.testSubscription.unsubscribe();
    }
  }
  
  onInputChange(event: any) {
    this.inputSubject.next(event.target.value);
  }
  updateNumber() {
    console.log(this.numberData)
    this.filteredData = this.getRandomItems(this.data, this.numberData);
    this.startWarningWatcher()
  }

  getRandomItems(array: any[], count: number): any[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
