import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllCertificatControl } from 'src/app/store/actions/certificatControl.action';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';

@Component({
  selector: 'app-inspections-vehicule-list',
  templateUrl: './inspections-vehicule-list.component.html',
  styleUrls: ['./inspections-vehicule-list.component.css']
})
export class InspectionsVehiculeListComponent implements OnInit {

  inpectionsVehicule$: Observable<ReadonlyArray<any>>;

  constructor(private store: Store<CertificatControlState>) {
    this.inpectionsVehicule$ = this.store.pipe(select(selectAllCertificatControls))
  }
  columns: any =
    {
      columnsName: ["id", "creationDate", "societe", "numeroRapport", "localisationCertificationFait", "vehicule.numeroAssurance", "validite", "utilisateur.nom"],
      field: ["#", "Date Inspection", "Societe", "Numero Rapport", "Localisation", "Matricule Vehicule", "validite", "Inspecteur"]
    }
  moisOptions = [
    { value: 'UN_MOIS', label: '1 MOIS' },
    { value: 'DEUX_MOIS', label: '2 MOIS' },
    { value: 'TROIS_MOIS', label: '3 MOIS' },
    { value: 'QUATRE_MOIS', label: '4 MOIS' },
    { value: 'CINQ_MOIS', label: '5 MOIS' },
    { value: 'SIX_MOIS', label: '6 MOIS' },
    { value: 'SEPT_MOIS', label: '7 MOIS' },
    { value: 'HUIT_MOIS', label: '8 MOIS' },
    { value: 'NEUF_MOIS', label: '9 MOIS' },
    { value: 'DIX_MOIS', label: '10 MOIS' },
    { value: 'ONZE_MOIS', label: '11 MOIS' },
    { value: 'DOUZE_MOIS', label: '12 MOIS' },
    { value: 'TREIZE_MOIS', label: '13 MOIS' },
    { value: 'QUATORZE_MOIS', label: '14 MOIS' },
    { value: 'QUINZE_MOIS', label: '15 MOIS' },
    { value: 'SEIZE_MOIS', label: '16 MOIS' },
    { value: 'DIX_SEPT_MOIS', label: '17 MOIS' },
    { value: 'DIX_HUIT_MOIS', label: '18 MOIS' },
    { value: 'DIX_NEUF_MOIS', label: '19 MOIS' },
    { value: 'VINGT_MOIS', label: '20 MOIS' }
  ];
  certificatControls = []
  ngOnInit(): void {

    this.inpectionsVehicule$.subscribe((certificatControl: any) => {
      console.log(certificatControl.certificatControls)
      if (Array.isArray(certificatControl.certificatControls) && certificatControl.certificatControls.length > 0) {
        this.certificatControls = certificatControl.certificatControls.map((ctrl: any) => {
          const option = this.moisOptions.find(opt => opt.value === ctrl.validite);
          return {
            ...ctrl,
            validite: option ? option.label : ctrl.validite // si trouvé, remplace par le label
          };
        });
      } else {
        console.log('No certificatControl found or still loading.');
      }
    });


  }
}
