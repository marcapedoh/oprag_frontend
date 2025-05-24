import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  utilisateur:any={
    nom:"john",
    prenom:"Doe",
    userName:"john@Doe548",
    email:"johndoe@mail.gb",
    signature:"Signature",
    role:"INSPECTEUR",
    inspection:{
      nom:"HP Services"
    }
  }
}
