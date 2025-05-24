import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CertificatControlState } from './store/reducers/certificatControl.reducer';
import { getAllCertificatControl } from './store/actions/certificatControl.action';
import { getAllBadge } from './store/actions/badge.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store:Store<CertificatControlState>){}
  ngOnInit(): void {
      this.store.dispatch(getAllCertificatControl("CertificatControls"))
      this.store.dispatch(getAllBadge("Badges"))
  }
}
