import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { Observable } from 'rxjs';
import SignaturePad from 'signature_pad';
import { createCertificatControl, visualiserCertificatControl } from 'src/app/store/actions/certificatControl.action';
import { createChauffeur } from 'src/app/store/actions/chauffeur.action';
import { hideToast } from 'src/app/store/actions/toast.action';
import { createVehicule } from 'src/app/store/actions/vehicule.action';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { ToastState } from 'src/app/store/reducers/toast.reducer';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';
import { selectToast } from 'src/app/store/selector/toast.selector';
import { selectUserProfil } from 'src/app/store/selector/user-profil.selector';

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
  inpectionsVehicule$: Observable<ReadonlyArray<any>>;
  chauffeurStored: any = {}
  vehiculeStored: any = {}
  selectedOption: string = '';
  selectedTypeVoitureOption: string = ''
  utilisateur$: Observable<any>;
  toast$: Observable<ToastState>;



  constructor(private store: Store<any>, private storeCertificatControl: Store<CertificatControlState>, private activatedRoute: ActivatedRoute, private currencyPipe: CurrencyPipe, private router: Router) {
    this.toast$ = this.store.select(selectToast);
    this.inpectionsVehicule$ = this.storeCertificatControl.pipe(select(selectAllCertificatControls))
    this.utilisateur$ = this.store.pipe(select(selectUserProfil))
  }
  toast: any = {}

  eligibleforInspection: boolean = false
  loaded = false;
  utilisateur: any = {}
  origin = ""
  ngOnInit(): void {

    if (this.router.url.includes('/inspecter/')) {
      this.origin = "Modification"

      const savedData = localStorage.getItem('cetificatControl');
      if (savedData) {
        this.certificatControl = JSON.parse(savedData);
      }
    } else {
      this.origin = "Enregistrer"
    }
    localStorage.removeItem("chauffeur");
    localStorage.removeItem("vehicule");

    this.utilisateur$.subscribe((profil: any) => {
      this.utilisateur = { ...profil.responseDAO }
      this.eligibleforInspection = !!this.utilisateur.signature
      this.loaded = true;
    })

    // const reloaded = sessionStorage.getItem('alreadyReloaded');
    // if (!reloaded) {
    //   sessionStorage.setItem('alreadyReloaded', 'true');
    //   location.reload();
    // } else {
    //   sessionStorage.removeItem('alreadyReloaded'); // nettoyage pour les futures visites
    // }
    this.inpectionsVehicule$.subscribe((certificatControl: any) => {
      console.log(certificatControl)
      if (Array.isArray(certificatControl.certificatControls) && certificatControl.certificatControls.length > 0) {

        this.activatedRoute.paramMap.subscribe((param) => {
          const certificatControlId = Number(param.get('id'));

          if (certificatControlId) {
            this.certificatControl = certificatControl.certificatControls.find((certificatControl: any) => certificatControl.id === certificatControlId)
            this.chauffeurStored = this.certificatControl.chauffeur
            this.vehiculeStored = this.certificatControl.vehicule
          }

        })
      }
    });

  }


  formatMontant() {
    if (this.certificatControl.montant) {
      this.certificatControl.montant = this.currencyPipe.transform(this.certificatControl.montant, 'XAF', 'symbol', '1.0-0'); // pour FCFA
    }
  }
  saveForm() {
    localStorage.setItem('cetificatControl', JSON.stringify(this.certificatControl));
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
    setTimeout(() => initFlowbite(), 0);
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
    localStorage.removeItem("cetificatControl")
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
