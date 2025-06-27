import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerUser } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import { UsersPerInspectionState } from 'src/app/store/reducers/user-per-inspection.reducer';
import { selectAllUserPerInspection } from 'src/app/store/selector/user-per-inspection.selector';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent implements OnInit {
  currentStep = 1;
  usersPerInspection$: Observable<ReadonlyArray<any>>;
  userRoleSelected: string = ""
  roleAddable: any = []
  user: any = {}
  confirmMotDePasse: string = ""
  columns: any =
    {
      columnsName: ["id", "nom", "prenom", "email", "role", "userName", "active"],
      field: ["#", "Nom", "Prenom", "Email", "UserRole", "UserName", "Status"]
    }
  constructor(private store: Store<AuthState>, private storeUsers: Store<UsersPerInspectionState>) {
    this.usersPerInspection$ = this.storeUsers.pipe(select(selectAllUserPerInspection))
  }
  usersInspecteur = []
  ngOnInit(): void {
    const userRole = localStorage.getItem("UserROle") as string
    this.roleAddable = userRole == "DGMG" ? [
      "INSPECTEUR",
      "INSPECTEUR_ADMIN"
    ] : [
      "INSPECTEUR"
    ]

    this.usersPerInspection$.subscribe((usersInspection: any) => {
      if (Array.isArray(usersInspection.usersInspection) && usersInspection.usersInspection.length > 0) {
        console.log(usersInspection)
        this.usersInspecteur = usersInspection.usersInspection
      } else {
        console.log('No userPerInspection found or still loading.');
      }
    })
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
