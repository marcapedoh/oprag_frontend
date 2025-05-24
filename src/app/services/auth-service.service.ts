import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost"

  login(authRequest:any){
    console.log(authRequest)
    return this.httpClient.post(this.baseUrl+":8080/OPRAG/v0/endpoint/auth/authenticate",{username:authRequest.username,motDePasse:authRequest.motDePasse})
  }

  register(registerRequest:any){
    return this.httpClient.post(this.baseUrl+":8080/OPRAG/v0/endpoint/auth/register",registerRequest)
  }

}
