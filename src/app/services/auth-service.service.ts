import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = "https://dev.routeafrique.com"

  login(authRequest: any) {
    //return this.httpClient.post("http://localhost:8080/OPRAG/v0/endpoint/auth/authenticate", { username: authRequest.username, motDePasse: authRequest.motDePasse })

    return this.httpClient.post(this.baseUrl + ":2020/OPRAG/v0/endpoint/auth/authenticate", { username: authRequest.username, motDePasse: authRequest.motDePasse })
  }


  register(registerRequest: any) {
    return this.httpClient.post(this.baseUrl + ":2020/OPRAG/v0/endpoint/auth/register", registerRequest)
  }

  update(user: any) {
    return this.httpClient.post(this.baseUrl + ":2020/OPRAG/v0/endpoint/auth/update", user)
  }

}
