import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { getAllUserPerInspectionName, getAllUserPerInspectionNameFailure, getAllUserPerInspectionNameSuccess } from "../actions/user-per-inspection.action";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UsersPerInspectionEffect {

  loadUserPerInspection$ = createEffect(() => this.actions$.pipe(
    ofType(getAllUserPerInspectionName),
    exhaustMap(({ inspectionName }) =>
      this.dataService.usersPerInspectionName(inspectionName).pipe(
        map((responseDAO) => getAllUserPerInspectionNameSuccess(responseDAO)),
        catchError((error) => of(getAllUserPerInspectionNameFailure(error)))
      ))
  ))
  constructor(private actions$: Actions, private dataService: DataService) { }
}
