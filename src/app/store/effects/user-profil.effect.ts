import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { getUserProfilInfo, getUserProfilInfoFailure, getUserProfilInfoSuccess, updateUserProfilInfo, updateUserProfilInfoFailure, updateUserProfilInfoSuccess } from "../actions/user-profil.action";
import { catchError, exhaustMap, map, of } from "rxjs";

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
    )
  ))
  constructor(private actions$: Actions, private dataService: DataService) { }
}
