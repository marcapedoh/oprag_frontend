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
  @Input() routeNavigate!:string;
  filteredData: any = []
  numberData: number = 20
  inputSubject = new Subject<string>();
  subscription!: Subscription;
  filteredElements: any = []
  testSubscription!: Subscription;
  totalPages: number=0;
  itemsPerPage: any=25;
  currentPage: number=0;
  
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
        if (this.dataType === "CertificatControls") {
          this.filteredElements = this.filteredData.filter((item: any) =>
            item.site.toLowerCase().includes(lowerSearch) ||
            item.societe.toLowerCase().includes(lowerSearch) ||
            item.numeroRapport.toLowerCase().includes(lowerSearch) ||
            item.description.toString().includes(lowerSearch) ||
            item.validite.toString().includes(lowerSearch) ||
            item.utilisateur.nom.toString().includes(lowerSearch)        

          );
        } else if (this.dataType === "Badges") {
          this.filteredElements = this.filteredData.filter((item: any) =>
            item.numero.toLowerCase().includes(lowerSearch) ||
            item.validite.toLowerCase().includes(lowerSearch) ||
            item.numeroParc.toLowerCase().includes(lowerSearch) ||
            item.inspecteur.nom.toString().includes(lowerSearch) ||
            item.codeQrString.toString().includes(lowerSearch) 
          );
        }

        return this.filteredElements
      })
    ).subscribe(filtered => {
      this.filteredData = filtered;
    });

  }

  getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
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
    this.filteredData = this.getRandomItems(this.data, this.numberData);
  }

  getRandomItems(array: any[], count: number): any[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.data.length / +this.itemsPerPage);

    this.data = this.data.slice(
      (this.currentPage - 1) * +this.itemsPerPage,
      this.currentPage * +this.itemsPerPage
    );

  }

  changePage(event: any, page: number): void {
    event.preventDefault()
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
}
