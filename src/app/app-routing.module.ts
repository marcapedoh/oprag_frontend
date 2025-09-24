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
import { SettingComponent } from './components/setting/setting.component';
import { FicheControlComponent } from './components/fiche-control/fiche-control.component';
import { FicheDataComponent } from './components/fiche-data/fiche-data.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FichePreviewComponent } from './components/fiche-preview/fiche-preview.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

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
        path: "vue-ensemble",
        component: DashboardComponent
      }, {
        path: "visuualiser-fiche",
        component: FichePreviewComponent
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
        path: 'fiche',
        component: FicheControlComponent
      },
      {
        path: 'fiche-data',
        component: FicheDataComponent
      },
      {
        path: 'utilisateurs/ajout',
        component: UtilisateurFormComponent
      },
      {
        path: 'utilisateurs/ajout/:id',
        component: UtilisateurFormComponent
      },
      {
        path: 'vueEnsemble',
        component: ChartsComponent
      },
      {
        path: 'aide',
        component: HelpPageComponent
      },
      {
        path: 'parametre',
        component: SettingComponent
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
