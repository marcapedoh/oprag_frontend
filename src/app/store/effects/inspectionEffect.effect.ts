import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createInspection, createInspectionFailure, createInspectionSuccess, deleteInspection, deleteInspectionFailure, deleteInspectionSuccess, getAllInspection, getAllInspectionFailure, getAllInspectionSuccess } from "../actions/inspection.action";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";

@Injectable()
export class InspectionEffect {

  loadInspections$ = createEffect(() => this.actions$.pipe(
    ofType(getAllInspection),
    exhaustMap(() =>
      this.dataService.loadInspections().pipe(
        map((responseDAO) => getAllInspectionSuccess(responseDAO)),
        catchError((error) => of(getAllInspectionFailure(error)))
      ))

  ))

  createInspection$ = createEffect(() => this.actions$.pipe(
    ofType(createInspection),
    concatMap(({ inspection }) =>
      this.dataService.createInspection(inspection).pipe(
        map((responseDAO) => createInspectionSuccess(responseDAO)),
        catchError((error) => of(createInspectionFailure(error)))
      )
    )
  ))

  deleteInspection$ = createEffect(() => this.actions$.pipe(
    ofType(deleteInspection),
    concatMap(({ inspectionId }) =>
      this.dataService.deleteInspection(inspectionId).pipe(
        map(() => deleteInspectionSuccess()),
        catchError(() => of(deleteInspectionFailure()))
      ))
  ))

  constructor(private actions$: Actions, private dataService: DataService) { }
}
