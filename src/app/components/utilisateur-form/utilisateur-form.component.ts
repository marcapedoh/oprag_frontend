import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerUser } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent implements OnInit {
  currentStep = 1;
  userRoleSelected: string = ""
  roleAddable: any = []
  user: any = {}
  confirmMotDePasse: string = ""
  constructor(private store: Store<AuthState>) { }
  ngOnInit(): void {
    const userRole = localStorage.getItem("UserROle") as string
    this.roleAddable = userRole == "DGMG" ? [
      "INSPECTEUR",
      "INSPECTEUR_ADMIN"
    ] : [
      "INSPECTEUR"
    ]
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

  save() {
    this.user = {
      ...this.user,
      idInspection: localStorage.getItem("InspectionId")
    }

    this.store.dispatch(registerUser(this.user))
  }


}
