import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import SignaturePad from 'signature_pad';
import { updateUserProfilInfo } from 'src/app/store/actions/user-profil.action';
import { selectUserProfil } from 'src/app/store/selector/user-profil.selector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit, AfterViewInit, OnDestroy {
  utilisateur$: Observable<any>;
  currentStep = 1
  utilisateur: any = {
  }


  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef;
  signaturePad!: SignaturePad;
  savedSignature: string | null = null;
  private resizeObserver!: ResizeObserver;
  signatureMethod: 'draw' | 'upload' = 'draw';

  constructor(private store: Store<any>) {
    this.utilisateur$ = this.store.pipe(select(selectUserProfil))
  }
  ngOnInit(): void {
    this.utilisateur$.subscribe((profil: any) => {
      this.utilisateur = { ...profil.responseDAO }
    })

  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  onSubmit() {
    //console.log(this.utilisateur)
    this.utilisateur = {
      ...this.utilisateur,
      motDePasse: this.utilisateur.motDePasse
    }
    this.store.dispatch(updateUserProfilInfo(this.utilisateur))
  }
  fileSelected = false;
  selectedFileName = '';


  ngAfterViewInit(): void {
    // Initialiser le signaturePad si on est déjà à l'étape 2
    if (this.currentStep === 2) {
      setTimeout(() => this.initSignaturePad(), 100);
    }
  }

  onStepChange(newStep: number): void {
    this.currentStep = newStep;

    // Si on passe à l'étape 2, initialiser le signaturePad après un court délai
    if (newStep === 2) {
      setTimeout(() => this.initSignaturePad(), 100);
    }
  }

  private initSignaturePad(): void {
    if (!this.canvasRef || !this.canvasRef.nativeElement) {
      console.warn('Canvas element not found');
      return;
    }

    const canvas = this.canvasRef.nativeElement;

    // Configurer le canvas
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);

    // Initialiser SignaturePad
    this.signaturePad = new SignaturePad(canvas, {
      minWidth: 1,
      maxWidth: 3,
      penColor: 'black',
    });

    // Observer les changements de taille pour le redimensionnement
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(canvas);
  }

  private resizeCanvas(): void {
    if (!this.canvasRef || !this.signaturePad) return;

    const canvas = this.canvasRef.nativeElement;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    // Sauvegarder le contenu actuel
    const data = this.signaturePad.toData();

    // Redimensionner
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);

    // Restaurer le contenu
    this.signaturePad.fromData(data);
  }

  setSignatureMethod(method: 'draw' | 'upload'): void {
    this.signatureMethod = method;
  }




  ngOnChanges(): void {
    // si l'utilisateur change de step et que le canvas apparaît
    setTimeout(() => {
      if (this.canvasRef && !this.signaturePad) {
        this.initSignaturePad();
      }
    });
  }

  // private initSignaturePad() {
  //   const canvas = this.canvasRef.nativeElement;
  //   this.signaturePad = new SignaturePad(canvas, {
  //     minWidth: 1,
  //     maxWidth: 3,
  //     penColor: 'black'
  //   });
  //   this.resizeCanvas();
  // }
  clearSignature() {
    this.signaturePad.clear();
  }

  saveSignature() {
    if (!this.signaturePad.isEmpty()) {
      this.savedSignature = this.signaturePad.toDataURL('image/png');
      this.utilisateur.signature = this.savedSignature;
    } else {
      alert('Aucune signature détectée.');
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Vérification de la taille (max 30MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Le fichier est trop volumineux (max 10MB)');
        return;
      }

      this.selectedFileName = file.name;
      this.fileSelected = true;

      // Conversion en URL de données
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.utilisateur.signature = e.target.result;

      };
      reader.readAsDataURL(file);
    }
  }
}
