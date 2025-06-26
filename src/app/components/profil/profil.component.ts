import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserProfil } from 'src/app/store/selector/user-profil.selector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur$: Observable<any>;
  utilisateur: any = {
    nom: "john",
    prenom: "Doe",
    userName: "john@Doe548",
    email: "johndoe@mail.gb",
    signature: "Signature",
    role: "INSPECTEUR",
    inspection: {
      nom: "HP Services"
    }
  }
  constructor(private store: Store<any>) {
    this.utilisateur$ = this.store.pipe(select(selectUserProfil))
  }
  ngOnInit(): void {
    this.utilisateur$.subscribe((user: any) => {
      console.log(user)
    })
  }
}
