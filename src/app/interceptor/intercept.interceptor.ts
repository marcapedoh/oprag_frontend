import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../services/token-service/token.service';
import { Store } from '@ngrx/store';
import { loginFailure } from '../store/actions/auth.action';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  PUBLIC_URL = {
    login: `https://dev.routeafrique.com:2020/OPRAG/v0/endpoint/auth/authenticate`,
    register: `https://dev.routeafrique.com:2020/OPRAG/v0/endpoint/auth/register`
  }
  constructor(private router: Router, private tokenService: TokenService, private store: Store<any>) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('I intercept it');
    const isPublic = request.url.includes(this.PUBLIC_URL.login) || request.url.includes(this.PUBLIC_URL.register);
    console.log("test: ", request.url.includes(this.PUBLIC_URL.login) || request.url.includes(this.PUBLIC_URL.register))
    if (!isPublic) {

      const authToken = localStorage.getItem('token')!;
      if (this.tokenService.isTokenValid(localStorage.getItem('token')!)) {

        const authReq = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${authToken}`)
        });
        return this.handleRequest(authReq, next);
      }
    }
    return this.handleRequest(request, next);
  }
  handleRequest(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(tap((event: HttpEvent<unknown>) => {
      if (event instanceof HttpResponse) {

      }
    }, (error: any) => {
      if (error instanceof HttpErrorResponse && error.status === 401 || error.status === 403 || error.status === 500) {
        if (!this.tokenService.isTokenValid(localStorage.getItem('token')!) && localStorage.getItem('token')!) {
          this.store.dispatch(loginFailure("Vous etes déconnecté"))
          this.router.navigate(['login']);
        }
      }
    }))
  }
}
