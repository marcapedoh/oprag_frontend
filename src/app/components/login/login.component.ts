import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  motDePasse: string = ""
  constructor(private store: Store<AuthState>) {
  }
  currentStep = 1; // 1 = formulaire de connexion, 2 = formulaire OTP
  otpCode = ""
  goToStep(step: number) {
    this.currentStep = step;
  }

  verifyOtp() {
    // Logique de vérification du code OTP
    console.log('Code OTP saisi:', this.otpCode);
    // Ajoutez votre logique de vérification ici
  }
  ngOnInit(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("Nom")
    localStorage.removeItem("Prenom")
  }

  login() {
    this.store.dispatch(login({ username: this.username, motDePasse: this.motDePasse }))
  }
}
