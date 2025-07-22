import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllUserPerInspectionName, getLastOperationDate, getUserRapport, getUserRapportCertificat } from 'src/app/store/actions/user-per-inspection.action';
import { selectAllBadges } from 'src/app/store/selector/badge.selector';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';
import { selectAllUserPerInspection } from 'src/app/store/selector/user-per-inspection.selector';
import { selectAllUtilisateur } from 'src/app/store/selector/utilisateur.selector';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  Math = Math;
  usersPerInspection$: Observable<ReadonlyArray<any>>;
  inpectionsVehicule$: Observable<ReadonlyArray<any>>;
  badges$: Observable<ReadonlyArray<any>>;

  usersInspecteur: any[] = []
  badges: any[] = []
  certificatControls: any[] = []
  selectedUser: any;
  usersActif: number = 0
  nombreRapportInspectionCree: number = 0
  nombreBadgeCree: number = 0
  currentPage = 1;
  itemsPerPage = 20;
  lastHour: any
  constructor(private store: Store<any>) {
    this.usersPerInspection$ = this.store.pipe(select(selectAllUserPerInspection))
    this.badges$ = this.store.pipe(select(selectAllBadges))
    this.inpectionsVehicule$ = this.store.pipe(select(selectAllCertificatControls))

  }
  ngOnInit(): void {
    this.badges$.subscribe((badges: any) => {
      console.log(badges.badges)
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {
        this.badges = badges.badges
      } else {
        console.log('No badges found or still loading.');
      }
    });
    this.inpectionsVehicule$.subscribe((certificatControl: any) => {
      console.log(certificatControl.certificatControls)
      if (Array.isArray(certificatControl.certificatControls) && certificatControl.certificatControls.length > 0) {
        this.certificatControls = certificatControl.certificatControls
      } else {
        console.log('No certificatControl found or still loading.');
      }
    });
    this.usersPerInspection$.subscribe((usersInspection: any) => {
      if (Array.isArray(usersInspection.usersInspection) && usersInspection.usersInspection.length > 0) {
        console.log(usersInspection)
        this.usersInspecteur = usersInspection.usersInspection
        this.usersActif = this.usersInspecteur.reduce((count, user) => user.active ? count + 1 : count, 0)
        this.nombreRapportInspectionCree = usersInspection.certificatRapport.length
        this.nombreBadgeCree = usersInspection.rapportBadge.length
        console.log("date: ", usersInspection.responseDAO)
        this.lastHour = usersInspection.responseDAO
      } else {
        console.log('No userPerInspection found or still loading.');
      }
    })


  }

  get paginatedUsers(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.usersInspecteur.slice(start, end);
  }

  selectUser(user: any) {
    this.selectedUser = user;
    this.store.dispatch(getLastOperationDate(user.id))
    this.store.dispatch(getUserRapport(user.id))
    this.store.dispatch(getUserRapportCertificat(user.id))

  }


  get totalPages(): number {
    return Math.ceil(this.usersInspecteur.length / this.itemsPerPage);
  }

  get rapportPourcentage(): number {

    return this.usersInspecteur.length > 0
      ? (this.nombreRapportInspectionCree / this.certificatControls.length) * 100
      : 0;
  }

  get badgePourcentage(): number {

    return this.badges.length > 0
      ? (this.nombreBadgeCree / this.badges.length) * 100
      : 0;
  }

}
