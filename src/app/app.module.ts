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
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({  }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
