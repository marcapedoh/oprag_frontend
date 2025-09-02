import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { clearAuthError, login, loginFailure, loginSuccess, registerUser, registerUserFailure, registerUserSuccess, updateUser, updateUserFailure, updateUserSuccess } from "../actions/auth.action";
import { catchError, concatMap, delay, map, of, switchMap, tap } from "rxjs";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/services/notification-service/notification.service";

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
          this.notificationService.success("Utilisateur authentifié")
          localStorage.setItem("token", action.responseDAO.token)
          localStorage.setItem("ConnectedUser", action.responseDAO.userId)
          localStorage.setItem("UserStatus", action.responseDAO.active)
          localStorage.setItem("UserROle", action.responseDAO.role)
          localStorage.setItem("OptNumber", action.responseDAO.otpNumber)
          localStorage.setItem("InspectionName", action.responseDAO.inspectionName)
          localStorage.setItem("InspectionId", action.responseDAO.inspectionId)
          localStorage.setItem("InspectionCode", action.responseDAO.inspectionCode)
          localStorage.setItem("Nom", action.responseDAO.nom)
          localStorage.setItem("Prenom", action.responseDAO.prenom)
          localStorage.setItem("SignaturePresence", JSON.stringify(action.responseDAO.signaturePresence))
          if (action.responseDAO.role == "CONTROLLEUR") {
            this.router.navigate(["/inspection/collection"])
          } else if (action.responseDAO.role == "SUPER_ADMIN") {
            this.router.navigate(["/vueEnsemble"])
          } else if (action.responseDAO.role == "INSPECTEUR_PRINCIPAL") {
            this.router.navigate(["/vueEnsemble"])
          }
        } else {
          this.notificationService.error("Vérifiez vos informations!")
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

  // resetError$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loginFailure),
  //     delay(5000),
  //     map(() => clearAuthError())
  //   )
  // );


  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateUser),
    concatMap(({ user }) =>
      this.authService.update(user).pipe(
        map((responseDAO) => updateUserSuccess(responseDAO)),
        catchError((error) => of(updateUserFailure(error)))
      ))
  ))

  constructor(private actions$: Actions, private authService: AuthServiceService, private router: Router, private notificationService: NotificationService) { }
}
