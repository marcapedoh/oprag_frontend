import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createInspection, createInspectionFailure, createInspectionSuccess, deleteInspection, deleteInspectionFailure, deleteInspectionSuccess, getAllInspection, getAllInspectionFailure, getAllInspectionSuccess } from "../actions/inspection.action";
import { catchError, concatMap, exhaustMap, map, of, tap } from "rxjs";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Injectable()
export class InspectionEffect {

  loadInspections$ = createEffect(() => this.actions$.pipe(
    ofType(getAllInspection),
    exhaustMap(() =>
      this.dataService.loadInspections().pipe(
        map((responseDAO) => getAllInspectionSuccess(responseDAO)),
        catchError((error) => of(getAllInspectionFailure(error)))
      )), tap((action) => {
        if (action.type === "[Inspection] Get all Inspection success") {
          this.notificationService.success("Inspections récupérées")
        } else {
          this.notificationService.error("Erreur lors de la recupération des Inspections")
        }
      })

  ))

  createInspection$ = createEffect(() => this.actions$.pipe(
    ofType(createInspection),
    concatMap(({ inspection }) =>
      this.dataService.createInspection(inspection).pipe(
        map((responseDAO) => createInspectionSuccess(responseDAO)),
        catchError((error) => of(createInspectionFailure(error)))
      )
    ), tap((action) => {
      if (action.type === "[Inspection] Create Inspection Success") {
        this.notificationService.success("Inspection ajouté avec succès")
      } else {
        this.notificationService.error("Erreur lors de la création de l'inspection")
      }
    })
  ))

  deleteInspection$ = createEffect(() => this.actions$.pipe(
    ofType(deleteInspection),
    concatMap(({ inspectionId }) =>
      this.dataService.deleteInspection(inspectionId).pipe(
        map(() => deleteInspectionSuccess()),
        catchError(() => of(deleteInspectionFailure()))
      )), tap((action) => {
        if (action.type === '[Inspection] delete Inspection Sucess') {
          this.notificationService.success("Inspection supprimé avec succès")
        } else {
          this.notificationService.error("Erreur lors de la suppression de l'inspection")
        }
      })
  ))

  constructor(private actions$: Actions, private dataService: DataService, private notificationService: NotificationService) { }
}
