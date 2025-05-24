import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';

@Component({
  selector: 'app-inspections-vehicule-list',
  templateUrl: './inspections-vehicule-list.component.html',
  styleUrls: ['./inspections-vehicule-list.component.css']
})
export class InspectionsVehiculeListComponent implements OnInit{

  inpectionsVehicule$:Observable<ReadonlyArray<any>>;

  constructor(private store: Store<CertificatControlState>){
    this.inpectionsVehicule$=this.store.pipe(select(selectAllCertificatControls))
  }
  columns:string[]=["id","site","societe","numeroRapport","essaiFonctionnementList","description","validite","utilisateur.nom"]
  certificatControls=[]
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
}
