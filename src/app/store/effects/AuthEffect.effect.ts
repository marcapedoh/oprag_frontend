import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { clearAuthError, login, loginFailure, loginSuccess, registerUser, registerUserFailure, registerUserSuccess } from "../actions/auth.action";
import { catchError, concatMap, delay, map, of, switchMap, tap } from "rxjs";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

  authenticateUser$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap((authRequest) =>
      this.authService.login(authRequest).pipe(
        map((responseDAO) => loginSuccess(responseDAO)),
        catchError((error: string) => of(loginFailure(error)))
      )), tap((action) => {
        if (action.type === '[Auth] loginSuccess') {
          localStorage.setItem("token", action.responseDAO.token)
          localStorage.setItem("ConnectedUser", action.responseDAO.userId)
          localStorage.setItem("UserStatus", action.responseDAO.active)
          localStorage.setItem("UserROle", action.responseDAO.role)
          localStorage.setItem("OptNumber", action.responseDAO.otpNumber)
          localStorage.setItem("InspectionName", action.responseDAO.inspectionName)
          localStorage.setItem("InspectionId", action.responseDAO.inspectionId)
          localStorage.setItem("Nom", action.responseDAO.nom)
          localStorage.setItem("Prenom", action.responseDAO.prenom)
          if (action.responseDAO.role == "INSPECTEUR") {
            this.router.navigate(["/inspection/collection"])
          } else if (action.responseDAO.role == "SUPER_ADMIN") {
            this.router.navigate(["/vueEnsemble"])
          } else if (action.responseDAO.role == "DGMG") {
            this.router.navigate(["/dashboard"])
          }
        }
      })
  ))


  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(registerUser),
    concatMap(({ registerRequest }) =>
      this.authService.register(registerRequest).pipe(
        map((responseDAO) => registerUserSuccess(responseDAO)),
        catchError((error: string) => of(registerUserFailure(error)))
      )), tap((action) => {
        if (action.type === "[RegisterUser] Register User Success") {
          this.router.navigate(["users"])
        }
      })
  ))

  resetError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginFailure),
      delay(5000),
      map(() => clearAuthError())
    )
  );



  constructor(private actions$: Actions, private authService: AuthServiceService, private router: Router) { }
}
