import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateUserProfilInfo } from 'src/app/store/actions/user-profil.action';
import { selectUserProfil } from 'src/app/store/selector/user-profil.selector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur$: Observable<any>;
  currentStep = 1
  utilisateur: any = {
  }
  constructor(private store: Store<any>) {
    this.utilisateur$ = this.store.pipe(select(selectUserProfil))
  }
  ngOnInit(): void {
    this.utilisateur$.subscribe((profil: any) => {
      this.utilisateur = { ...profil.responseDAO }
    })
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Vérification de la taille (max 30MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Le fichier est trop volumineux (max 30MB)');
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
