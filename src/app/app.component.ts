import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authError$: Observable<string | null>;
  constructor(private store: Store<CertificatControlState>, private storeError: Store<AuthState>, private storeChart: Store<ChartBadgesObjectState>) {
    this.authError$ = this.store.select(selectAuthError);
  }
  ngOnInit(): void {
    this.store.dispatch(getAllCertificatControl("CertificatControls"))
    this.store.dispatch(getAllBadge("Badges"))
    this.storeChart.dispatch(getAllChartObject())
  }



}
