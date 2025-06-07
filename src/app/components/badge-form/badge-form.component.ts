import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createBadge } from 'src/app/store/actions/badge.action';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent {
  badge:any={
    certificatControl:{
      id:0
    }
  }
  inpectionsVehicule$:Observable<ReadonlyArray<any>>;
  certificatControls:any[]=[]
  constructor(private store: Store<CertificatControlState>){
    this.inpectionsVehicule$=this.store.pipe(select(selectAllCertificatControls))
  }


   ngOnInit(): void {
      this.inpectionsVehicule$.subscribe((certificatControl:any) => {
        console.log(certificatControl.certificatControls)
            if (Array.isArray(certificatControl.certificatControls) && certificatControl.certificatControls.length > 0) {
                this.certificatControls=certificatControl.certificatControls
            } else {
                console.log('No certificatControl found or still loading.');
            }
        });
  }

  save(){
    this.badge={
      ...this.badge,
      inspecteur:{
        id:+localStorage.getItem("ConnectedUser")!
      }
    }
    console.log(this.badge)
    this.store.dispatch(createBadge(this.badge))
  }
  
}
