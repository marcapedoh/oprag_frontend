import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { Observable } from 'rxjs';
import SignaturePad from 'signature_pad';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
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
    essaiNonFonctionnementList: [],
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

  inspectionElementsList = {
    Marche_AV_AR: "Marche AVANT ARRIERE",
    Pictogrammes_securite: "Pictogrammes sécurité",
    Vibration: "Vibration",
    Gyrophare: "Gyrophare",
    Clignotants_AV: "Clignotants AVANT",
    Clignotants_AR: "Clignotants ARRIERE",
    Changement_de_direction: "Changement de direction",
    Trou_d_homme: "Trou d'homme",
    Freinage: "Freinage",
    Arret_d_urgence: "Arrêt d'urgence",
    Etancheite_cuve: "Étanchéité cuve",
    SYSTEME_DE_FREINAGE: "Système de freinage",
    SYSTEME_HYDRAULIQUE: "Système hydraulique",
    CARTE_GRISE: "Carte grise",
    ASSURANCE: "Assurance",
    VISITE_TECHNIQUE: "Visite Technique",
    EXTINCTEUR: "Extincteur",
    TROUSSE_A_PHARMACIE: "Trousse à pharmacie",
    BOMBONNE_D_AIR: "Bombonne d'air",
    TUYAUTERIE_DU_SYSTEME_DES_REMORQUES: "Tuyauterie du système des remorques",
    SANGLE: "Sangle",
    ELINGUES: "Élingues",
    MANILLES: "Manilles",
    MANOMETRE_DE_PRESSION: "Manomètre de pression",
    TOLERANCE_USURE_DES_PNEUS: "Tolérance usure des pneus",
    INDICE_DE_VITESSE_ET_DATE_PEREMPTION: "Indice de vitesse et date péremption",
    PERMIS_DE_CONDUIRE: "Permis de conduire",
    ROUES_JANTES_ET_LEURS_FIXATIONS: "Roues, Jantes et leurs Fixations",
    DIAGNOSTIC_PANNES_ELECTRONIQUES: "Diagnostic pannes électroniques",
    FONCTIONNEMENT_MANOMETRE_DE_PRESSION: "Fonctionnement manomètre de pression",
    BAVETTE_ARRIERE_COUVRE_ROUE: "Bavette Arrière / Couvre roue",
    ETAT_DES_BONBONNES_D_AIR: "État des bonbonnes d'air",
    TWIST_LOCK_SANGLES_CHAINES: "Twist Lock + Sangles,Chaînes",
    USURE_GRUE_CAMION_MULTI_LEVE: "Usure Grue camion multi-lève",
    DOMMAGE_VISIBLE_GRUE_MULTI_LEVE: "Dommage visible grue multi-lève",
    VERIFICATION_CHASSIE_MULTI_LEVE: "Vérification chassie multi-lève",
    VERIFICATION_VERINS_MULTI_LEVE: "Vérification vérins multi-lève",
    VERIFICATION_AXE_GOUPILLES_GALETS_DE_GUIDAGE: "Vérification axes,goupilles,galets de guidage",
    ESSAI_DE_FONCTIONNEMENT_MULTI_LEVE: "Essai de fonctionnement multi-lève",
    EPI: "EPI",
    PHARES: "Phares",
    RETROVISEURS: "Rétroviseurs",
    ETAT_DE_LA_BENNE_PLATEAU: "État de la Benne / Plateau",
    MAIN_D_ACCOUPLEMENT: "Main d'accouplement",
    TOLERANCE_USURE: "Tolérance usure",
    SYSTEME_DE_CHARGE_BATTERIE: "Système de charge batterie",
    ESSAI_FREINAGE: "Essai freinage",
    FLEXIBLES_DE_FREINAGE: "Flexibles de freinage",
    SUSPENSION: "Suspension",
    AMORTISSEURS: "Amortisseurs",
    ETAT_DES_BEQUILLES: "Etat des Béquilles",
    DISPOSIF_D_ATTELAGE: "Dispositif d'attelage",
    USURE_MAILLON_CROCHETS: "Usure maillon crochets",
    MARQUAGE_CHARGE_MULTI_LEVE: "Marquage charge multi-lève",
    PLAQUES_D_IMMATRICULATION: "Plaques d'immatriculation",
    TROUSSE_PREMIER_SECOURS: "Trousse premier secours",
    FEUX_DE_DETRESSES: "Feux de détresses",
    ESSUIE_GLACES: "Essuie-Glaces",
    FEUX_GABARIT: "Feux Gabarit",
    FEUX_ARRIERE_STOP: "Feux arrière / Feux Stop",
    CEINTURE_DE_SECURITE: "Ceinture de Sécurité",
    COUPE_BATTERIE: "Coupe batterie",
    ETAT_DE_LA_CARROSSERIE: "Etat de la Carrosserie"
  };

  constructor(private store: Store<any>, private storeCertificatControl: Store<CertificatControlState>, private activatedRoute: ActivatedRoute, private currencyPipe: CurrencyPipe, private router: Router, private notificationService: NotificationService) {
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
    const savedData = localStorage.getItem('cetificatControl');
    if (savedData) {
      this.certificatControl = JSON.parse(savedData);
    }
    if (this.router.url.includes('/inspecter/')) {
      this.origin = "Modification"


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


  sortAlphabetically(a: any, b: any) {
    return a.value.localeCompare(b.value);
  }

  // Ajoutez cette méthode pour obtenir le libellé d'un élément
  getElementLabel(key: string): string {
    return this.inspectionElementsList[key as keyof typeof this.inspectionElementsList] || key;
  }


  // Ajoutez cette méthode pour supprimer un élément
  removeElement(index: number) {
    this.certificatControl.essaiFonctionnementList.splice(index, 1);
    this.saveForm();
  }
  removeNoCheckingElement(index: number) {
    this.certificatControl.essaiNonFonctionnementList.splice(index, 1);
    this.saveForm();
  }
  // Modifiez la méthode onSelectChange
  onSelectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value && !this.certificatControl.essaiFonctionnementList.includes(value) && !this.certificatControl.essaiNonFonctionnementList.includes(value)) {
      this.certificatControl.essaiFonctionnementList.push(value);
    } else {
      this.notificationService.info("Elément déjà ajouté")
    }
    this.selectedOption = '';
    this.saveForm();
  }

  selectedNoCheckingPoint = ''
  onSelectNoCheckingPoints(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (!this.certificatControl.essaiNonFonctionnementList) {
      this.certificatControl = {
        ...this.certificatControl,
        essaiNonFonctionnementList: []
      };
    }
    if (value && !this.certificatControl.essaiNonFonctionnementList.includes(value) && !this.certificatControl.essaiFonctionnementList.includes(value)) {
      this.certificatControl.essaiNonFonctionnementList.push(value);
    } else {
      this.notificationService.info("Elément déjà ajouté")
    }
    this.selectedNoCheckingPoint = '';
    this.saveForm();
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




  save() {
    if (this.origin === "Modification") {
      this.certificatControl = {
        ...this.certificatControl,
        utilisateur: {
          id: localStorage.getItem("ConnectedUser")!
        },
        vehicule: this.certificatControl.vehicule,
        chauffeur: this.certificatControl.chauffeur
      }
    } else {

      this.certificatControl = {
        ...this.certificatControl,

        utilisateur: {
          id: localStorage.getItem("ConnectedUser")!
        },
        vehicule: JSON.parse(localStorage.getItem("vehicule")!),
        chauffeur: JSON.parse(localStorage.getItem("chauffeur")!)
      }
    }
    console.log(this.certificatControl)
    this.store.dispatch(createCertificatControl(this.certificatControl))
    localStorage.removeItem("cetificatControl")
    this.certificatControl = {}
  }

  visualiser() {
    this.certificatControl = {
      ...this.certificatControl,

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
