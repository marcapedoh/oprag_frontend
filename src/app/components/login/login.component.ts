import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import { selectAuthError } from 'src/app/store/selector/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ""
  motDePasse: string = ""
  authError$: Observable<string | null>;
  constructor(private store: Store<AuthState>) {
    this.authError$ = this.store.select(selectAuthError);
  }
  ngOnInit(): void {
    localStorage.removeItem("token")
  }

  login() {
    this.store.dispatch(login({ username: this.username, motDePasse: this.motDePasse }))
  }
}
