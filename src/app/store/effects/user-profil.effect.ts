import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { getUserProfilInfo, getUserProfilInfoFailure, getUserProfilInfoSuccess, updateUserProfilInfo, updateUserProfilInfoFailure, updateUserProfilInfoSuccess } from "../actions/user-profil.action";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Injectable()
export class UserProfilEffect {

  loadUserProfil$ = createEffect(() => this.actions$.pipe(
    ofType(getUserProfilInfo),
    exhaustMap(({ userId }) =>
      this.dataService.findUserById(userId).pipe(
        map((responseDAO) => getUserProfilInfoSuccess(responseDAO)),
        catchError((error) => of(getUserProfilInfoFailure(error)))
      ))
  ))

  updateUserProfil$ = createEffect(() => this.actions$.pipe(
    ofType(updateUserProfilInfo),
    exhaustMap(({ user }) =>
      this.dataService.updateUser(user).pipe(
        map((responseDAO) => updateUserProfilInfoSuccess(responseDAO)),
        catchError((error) => of(updateUserProfilInfoFailure(error)))
      )
    ), tap((action) => {
      if (action.type === "[User-Profil] Update User Profil Success") {
        this.notificationService.success("Informations modifiées et sauvegardées avec succès")
      } else {
        this.notificationService.error("Erreur lors de la modification des informations")
      }
    })
  ))
  constructor(private actions$: Actions, private dataService: DataService, private notificationService: NotificationService) { }
}
