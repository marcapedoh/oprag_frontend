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
import { CertificatControlEffects } from './store/effects/certificatControl.reducer';
import { BadgeListComponent } from './components/badge-list/badge-list.component';
import { HttpClientModule } from '@angular/common/http';
import { authReducer } from './store/reducers/auth.reducer';
import { certificatControlReducer } from './store/reducers/certificatControl.reducer';
import { BadgeEffect } from './store/effects/badge.effect';
import { badgeReducer } from './store/reducers/badge.reducer';
import { BadgeFormComponent } from './components/badge-form/badge-form.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UtilisateurFormComponent } from './components/utilisateur-form/utilisateur-form.component';
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
    UtilisateurFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth:authReducer, certificatControls:certificatControlReducer, badges:badgeReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects,CertificatControlEffects,BadgeEffect])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
