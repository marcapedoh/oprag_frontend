import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormInspectionComponent } from './components/form-inspection/form-inspection.component';
import { InspectionsVehiculeListComponent } from './components/inspections-vehicule-list/inspections-vehicule-list.component';

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
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
