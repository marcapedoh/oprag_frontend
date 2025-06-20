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
import { CardComponent } from './components/card/card.component';
import { guardGuard } from './guard/guard.guard';
import { ChartsComponent } from './components/chart/chart.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { TechnicalPartenersComponent } from './components/technical-parteners/technical-parteners.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent,

    canActivate: [guardGuard],
    children: [
      {
        path: '',
        redirectTo: 'vueEnsemble',
        pathMatch: 'full'
      },
      {
        path: "inspecter",
        component: FormInspectionComponent
      },
      {
        path: "inspecter/:id",
        component: FormInspectionComponent
      },
      {
        path: "inspection/collection",
        component: InspectionsVehiculeListComponent
      },
      {
        path: 'badge/collection',
        component: BadgeListComponent
      },
      {
        path: 'badge/ajout',
        component: BadgeFormComponent
      },
      {
        path: 'badge/ajout/:id',
        component: BadgeFormComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      },
      {
        path: 'badge/:id',
        component: CardComponent
      },
      {
        path: 'utilisateurs/ajout',
        component: UtilisateurFormComponent
      },
      {
        path: 'vueEnsemble',
        component: ChartsComponent
      },
      {
        path: 'users',
        component: ManageUsersComponent
      },
      {
        path: 'partenaires-technique',
        component: TechnicalPartenersComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
