import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CertificatControlState } from './store/reducers/certificatControl.reducer';
import { getAllCertificatControl } from './store/actions/certificatControl.action';
import { getAllBadge } from './store/actions/badge.action';
import { Observable } from 'rxjs';
import { selectAuthError } from './store/selector/auth.selector';
import { AuthState } from './store/reducers/auth.reducer';
import { ChartBadgesObjectState } from './store/reducers/badge.reducer';
import { getAllChartObject } from './store/actions/chartObject.action';
import { ToastState } from './store/reducers/toast.reducer';
import { selectToast } from './store/selector/toast.selector';
import { hideToast } from './store/actions/toast.action';
import { getAllUserPerInspectionName } from './store/actions/user-per-inspection.action';
import { UsersPerInspectionState } from './store/reducers/user-per-inspection.reducer';
import { initFlowbite } from 'flowbite';
import { userProfil } from './store/reducers/user-profil.reducer';
import { getUserProfilInfo } from './store/actions/user-profil.action';
import { InspectionState } from './store/reducers/inspection.reducer';
import { getAllInspection } from './store/actions/inspection.action';
import { getAllUtilisateur } from './store/actions/utilisateur.action';
import { UtilisateurState } from './store/reducers/utilisateur.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  authError$: Observable<string | null>;
  constructor(private store: Store<CertificatControlState>,
    private storeError: Store<AuthState>,
    private storeChart: Store<ChartBadgesObjectState>,
    private storeUsersPerInspection: Store<UsersPerInspectionState>,
    private storeUserProfil: Store<userProfil>,
    private storeInspections: Store<InspectionState>,
    private storeUtilisateurs: Store<UtilisateurState>) {
    this.authError$ = this.store.select(selectAuthError);
  }
  ngOnInit(): void {
    this.store.dispatch(getAllCertificatControl("CertificatControls"))
    this.store.dispatch(getAllBadge("Badges"))
    this.storeUtilisateurs.dispatch(getAllUtilisateur("Utilisateurs"))
    this.storeChart.dispatch(getAllChartObject())
    this.storeInspections.dispatch(getAllInspection())
    this.storeUserProfil.dispatch(getUserProfilInfo(+localStorage.getItem("ConnectedUser")!))
    this.storeUsersPerInspection.dispatch(getAllUserPerInspectionName())
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }


}
