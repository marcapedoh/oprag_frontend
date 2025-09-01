import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerUser, updateUser } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import { InspectionState } from 'src/app/store/reducers/inspection.reducer';
import { UsersPerInspectionState } from 'src/app/store/reducers/user-per-inspection.reducer';
import { selectAllInspections } from 'src/app/store/selector/inspection.selector';
import { selectAllUserPerInspection } from 'src/app/store/selector/user-per-inspection.selector';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent implements OnInit {
  currentStep = 1;
  inpections$: Observable<ReadonlyArray<any>>;
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
  constructor(private store: Store<AuthState>, private storeUsers: Store<UsersPerInspectionState>, private storeInspection: Store<InspectionState>, private router: Router) {
    this.usersPerInspection$ = this.storeUsers.pipe(select(selectAllUserPerInspection))
    this.inpections$ = this.storeInspection.pipe(select(selectAllInspections))
  }
  usersInspecteur = []
  inspections: any = []
  inspectionFieldActive = false
  selectedInspection = ""
  origin = ""
  ngOnInit(): void {
    if (this.router.url.includes('/utilisateurs/ajout/')) {
      this.origin = "Modification"
      this.user = JSON.parse(localStorage.getItem("EditableUser")!)
    }
    this.user = {}
    const userRole = localStorage.getItem("UserROle") as string
    this.roleAddable = userRole == "INSPECTEUR_PRINCIPAL" ? [
      "CONTROLLEUR",
    ] : [
      "INSPECTEUR_PRINCIPAL"
    ]

    this.usersPerInspection$.subscribe((usersInspection: any) => {
      if (Array.isArray(usersInspection.usersInspection) && usersInspection.usersInspection.length > 0) {
        console.log(usersInspection)
        this.usersInspecteur = usersInspection.usersInspection
      } else {
        console.log('No userPerInspection found or still loading.');
      }
    })
    this.inpections$.subscribe((inspections: any) => {
      console.log(inspections.inspections)
      if (Array.isArray(inspections.inspections) && inspections.inspections.length > 0) {
        this.inspections = inspections.inspections
      } else {
        console.log('No inspections found or still loading.');
      }
    });
    this.inspectionFieldActive = localStorage.getItem("InspectionId") === null || localStorage.getItem("InspectionId") === "null";
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
  handleSaveMethod() {
    if (this.router.url.includes('/utilisateurs/ajout/')) {
      this.store.dispatch(updateUser(this.user))
      this.user = {}
    } else {
      this.save()
    }

  }
  save() {
    if (this.inspectionFieldActive) {
      this.user = {
        ...this.user,
        idInspection: this.selectedInspection
      }
    } else {
      this.user = {
        ...this.user,
        idInspection: localStorage.getItem("InspectionCode")
      }


    }


    this.store.dispatch(registerUser(this.user))

    this.user = {}
  }


}
