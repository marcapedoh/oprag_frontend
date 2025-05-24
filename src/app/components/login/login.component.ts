import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth.action';
import { AuthState } from 'src/app/store/reducers/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string=""
  motDePasse:string=""
  constructor(private store:Store<AuthState>){}
  ngOnInit(): void {
      
  }

  login(){
    this.store.dispatch(login({username:this.username,motDePasse:this.motDePasse}))
  }
}
