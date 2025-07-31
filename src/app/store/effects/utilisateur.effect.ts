import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { changeUserState, changeUserStateFailure, changeUserStateSuccess, getAllUtilisateur, getAllUtilisateurFailure, getAllUtilisateurSuccess } from "../actions/utilisateur.action";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UtilisateurEffect {

  loadUtilisateurs$ = createEffect(() => this.actions$.pipe(
    ofType(getAllUtilisateur),
    exhaustMap(({ element }) =>
      this.dataService.loadData(element).pipe(
        map((responseDAO) => getAllUtilisateurSuccess(responseDAO)),
        catchError((error) => of(getAllUtilisateurFailure(error)))
      ))
  ))

  changeUserState$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserState),
    concatMap(({ userId }) =>
      this.dataService.changeState(userId).pipe(
        map(() => changeUserStateSuccess()),
        catchError(() => of(changeUserStateFailure()))
      )
    )
  ))
  constructor(private actions$: Actions, private dataService: DataService) { }
}
