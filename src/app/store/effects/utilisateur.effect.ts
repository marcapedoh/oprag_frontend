import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { getAllUtilisateur, getAllUtilisateurFailure, getAllUtilisateurSuccess } from "../actions/utilisateur.action";
import { catchError, exhaustMap, map, of } from "rxjs";

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
  constructor(private actions$: Actions, private dataService: DataService) { }
}
