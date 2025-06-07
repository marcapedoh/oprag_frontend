import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createCertificatControl, visualiserCertificatControl } from 'src/app/store/actions/certificatControl.action';
import { createChauffeur } from 'src/app/store/actions/chauffeur.action';
import { hideToast } from 'src/app/store/actions/toast.action';
import { createVehicule } from 'src/app/store/actions/vehicule.action';
import { ToastState } from 'src/app/store/reducers/toast.reducer';
import { selectAuthError } from 'src/app/store/selector/auth.selector';
import { selectToast } from 'src/app/store/selector/toast.selector';

declare const Modal: any;
@Component({
  selector: 'app-form-inspection',
  templateUrl: './form-inspection.component.html',
  styleUrls: ['./form-inspection.component.css']
})
export class FormInspectionComponent implements OnInit {

  currentStep = 1;
  isChauffeurModal = true
  certificatControl: any = {
    essaiFonctionnementList: [],
    chauffeur: {},
    vehicule: {
      typeVehicules: []
    }
  }
  chauffeurStored: any = {}
  vehiculeStored: any = {}
  selectedOption: string = '';
  selectedTypeVoitureOption: string = ''
  toast$: Observable<ToastState>;
  constructor(private store: Store<any>) {
    this.toast$ = this.store.select(selectToast);
  }
  toast: any = {}


  ngOnInit(): void {

    localStorage.removeItem("chauffeur");
    localStorage.removeItem("vehicule");
    const reloaded = sessionStorage.getItem('alreadyReloaded');
    if (!reloaded) {
      sessionStorage.setItem('alreadyReloaded', 'true');
      location.reload();
    } else {
      sessionStorage.removeItem('alreadyReloaded'); // nettoyage pour les futures visites
    }
  }
  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  openChauffeurModal() {
    console.log(this.isChauffeurModal)
    this.isChauffeurModal = !this.isChauffeurModal;
  }

  onSelectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value && !this.certificatControl.essaiFonctionnementList.includes(value)) {
      this.certificatControl.essaiFonctionnementList.push(value);
    }
    this.selectedOption = '';
  }
  onSelectTypeVehiculeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value && !this.certificatControl.vehicule.typeVehicules.includes(value)) {
      this.certificatControl.vehicule.typeVehicules.push(value);
    }
    this.selectedTypeVoitureOption = '';
  }

  createChauffeur() {
    this.store.dispatch(createChauffeur(this.certificatControl.chauffeur));
    this.chauffeurStored = this.certificatControl.chauffeur
  }

  createVehicule() {
    this.store.dispatch(createVehicule(this.certificatControl.vehicule))

    this.vehiculeStored = this.certificatControl.vehicule
  }

  createRapportInspection() {
    this.store.dispatch(createCertificatControl(this.certificatControl))
  }


  save() {
    this.certificatControl = {
      ...this.certificatControl,
      signatureDGM: "null",
      utilisateur: {
        id: localStorage.getItem("ConnectedUser")!
      },
      vehicule: JSON.parse(localStorage.getItem("vehicule")!),
      chauffeur: JSON.parse(localStorage.getItem("chauffeur")!)
    }
    console.log(this.certificatControl)
    this.store.dispatch(createCertificatControl(this.certificatControl))
  }

  visualiser() {
    this.certificatControl = {
      ...this.certificatControl,
      signatureDGM: "null",
      utilisateur: {
        id: localStorage.getItem("ConnectedUser")!
      },
      vehicule: JSON.parse(localStorage.getItem("vehicule")!),
      chauffeur: JSON.parse(localStorage.getItem("chauffeur")!)
    }
    console.log(this.certificatControl)
    this.store.dispatch(visualiserCertificatControl(this.certificatControl))
  }

  onCloseToast() {
    this.store.dispatch(hideToast());
  }
}
