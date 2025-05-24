import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormInspectionComponent } from './components/form-inspection/form-inspection.component';
import { InspectionsVehiculeListComponent } from './components/inspections-vehicule-list/inspections-vehicule-list.component';
import { BadgeListComponent } from './components/badge-list/badge-list.component';
import { BadgeFormComponent } from './components/badge-form/badge-form.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UtilisateurFormComponent } from './components/utilisateur-form/utilisateur-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "inspecter",
        component: FormInspectionComponent
      },
      {
        path:"inspection/collection",
        component:InspectionsVehiculeListComponent
      },
      {
        path:'badge/collection',
        component:BadgeListComponent
      },
      {
        path:'badge/ajout',
        component:BadgeFormComponent
      },
      {
        path:'profil',
        component:ProfilComponent
      },
      {
        path:'utilisateurs/ajout',
        component:UtilisateurFormComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
