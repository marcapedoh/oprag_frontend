import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription, debounceTime, distinctUntilChanged, map, interval, take, tap } from 'rxjs';
import { deleteCertificatControl, generateCertificatControl } from 'src/app/store/actions/certificatControl.action';
import { showToast } from 'src/app/store/actions/toast.action';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input() data!: Array<any>;
  @Input() columns!: any
  @Input() dataType!: string;
  @Input() routeNavigate!: string;
  filteredData: any = []
  numberData: number = 10
  inputSubject = new Subject<string>();
  subscription!: Subscription;
  showToastTest: boolean = false
  filteredElements: any = []
  testSubscription!: Subscription;
  totalPages: number = 0;
  itemsPerPage: any = 2;
  currentPage: number = 0;

  constructor(private router: Router, private store: Store<CertificatControlState>) { }

  ngOnInit(): void {

    setTimeout(() => {
      if (this.data && this.data.length > 0) {
        this.data = this.data.filter(data => data.deleted !== true)

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
    const value = path.split('.').reduce((acc, part) => acc?.[part], obj);

    if (!value) return value;

    if (path.toLowerCase().includes('creationdate')) {
      // Convertit la chaîne Instant en date lisible (yyyy-mm-dd)
      const date = new Date(value);
      return date.toLocaleDateString('fr-CA'); // format ISO : yyyy-mm-dd
    }

    return value;
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

  generateReportAction(certificatControlId: number) {
    this.store.dispatch(generateCertificatControl(certificatControlId))
  }

  deleteCerticatControl(certificatControlId: number) {
    this.store.dispatch(deleteCertificatControl(certificatControlId))
    this.showToastTest = true;

  }

  navigate() {
    this.router.navigate([this.routeNavigate])
  }

  updateBadge(certificatControlId: number) {
    this.router.navigate(["badge/ajout", certificatControlId])
  }
  navigateToCardForPrint(id: number) {
    this.router.navigate(["badge", id])
  }
  navigateToCerticatControlFormUpdate(id: number) {

    this.router.navigate(["inspecter", id])
  }
  deleteBadge(badgeId: number) {

  }
}
