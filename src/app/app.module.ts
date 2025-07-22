import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormInspectionComponent } from './components/form-inspection/form-inspection.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { InspectionsVehiculeListComponent } from './components/inspections-vehicule-list/inspections-vehicule-list.component';
import { ToastComponent } from './components/toast/toast.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './store/effects/AuthEffect.effect';
import { CertificatControlEffects } from './store/effects/certificatControl.effect';
import { BadgeListComponent } from './components/badge-list/badge-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authReducer } from './store/reducers/auth.reducer';
import { certificatControlReducer } from './store/reducers/certificatControl.reducer';
import { BadgeEffect } from './store/effects/badge.effect';
import { badgeReducer } from './store/reducers/badge.reducer';
import { BadgeFormComponent } from './components/badge-form/badge-form.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UtilisateurFormComponent } from './components/utilisateur-form/utilisateur-form.component';
import { chauffeurReducer } from './store/reducers/chauffeur.reducer';
import { vehiculeReducer } from './store/reducers/vehicule.reducer';
import { ChauffeurEffect } from './store/effects/Chauffeur.effect';
import { VehiculeEffect } from './store/effects/Vehicule.effect';
import { InterceptInterceptor } from './interceptor/intercept.interceptor';
import { CardComponent } from './components/card/card.component';
import { ChartsComponent } from './components/chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { toastReducer } from './store/reducers/toast.reducer';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { TechnicalPartenersComponent } from './components/technical-parteners/technical-parteners.component';
import { userPerInspectionReducer } from './store/reducers/user-per-inspection.reducer';
import { UsersPerInspectionEffect } from './store/effects/users-per-inspection.effect';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { userProfilReducer } from './store/reducers/user-profil.reducer';
import { UserProfilEffect } from './store/effects/user-profil.effect';
import { inspectionReducer } from './store/reducers/inspection.reducer';
import { InspectionEffect } from './store/effects/inspectionEffect.effect';
import { utilisateurReducer } from './store/reducers/utilisateur.action';
import { UtilisateurEffect } from './store/effects/utilisateur.effect';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    FormInspectionComponent,
    NavbarComponent,
    ModalComponent,
    DatatableComponent,
    InspectionsVehiculeListComponent,
    ToastComponent,
    BadgeListComponent,
    BadgeFormComponent,
    ProfilComponent,
    UtilisateurFormComponent,
    CardComponent,
    ChartsComponent,
    ManageUsersComponent,
    TechnicalPartenersComponent,
    UserStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer, certificatControls: certificatControlReducer, badges: badgeReducer, chauffeurs: chauffeurReducer, vehicules: vehiculeReducer, toast: toastReducer, usersInspection: userPerInspectionReducer, profil: userProfilReducer, inspections: inspectionReducer, utilisateurs: utilisateurReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects, CertificatControlEffects, BadgeEffect, ChauffeurEffect, VehiculeEffect, UsersPerInspectionEffect, UserProfilEffect, InspectionEffect, UtilisateurEffect])

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
