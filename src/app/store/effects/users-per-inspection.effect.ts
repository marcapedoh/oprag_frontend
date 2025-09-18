import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { getAllUserPerInspectionName, getAllUserPerInspectionNameFailure, getAllUserPerInspectionNameFailureWithParam, getAllUserPerInspectionNameSuccess, getAllUserPerInspectionNameSuccessWithParam, getAllUserPerInspectionNameWithParam, getLastOperationDate, getLastOperationDateFailure, getLastOperationDateSuccess, getUserRapport, getUserRapportCertificat, getUserRapportCertificatFailure, getUserRapportCertificatSuccess, getUserRapportFailure, getUserRapportSuccess } from "../actions/user-per-inspection.action";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class UsersPerInspectionEffect {

  loadUserPerInspection$ = createEffect(() => this.actions$.pipe(
    ofType(getAllUserPerInspectionName),
    exhaustMap(() =>
      this.dataService.usersPerInspectionName().pipe(
        map((responseDAO) => getAllUserPerInspectionNameSuccess(responseDAO)),
        catchError((error) => of(getAllUserPerInspectionNameFailure(error)))
      ))
  ))

  loadUserPerInspectionWithParam$ = createEffect(() => this.actions$.pipe(
    ofType(getAllUserPerInspectionNameWithParam),
    exhaustMap(({ nomInspection }) =>
      this.dataService.usersPerInspectionNameWithParam(nomInspection).pipe(
        map((responseDAO) => getAllUserPerInspectionNameSuccessWithParam(responseDAO)),
        catchError((error) => of(getAllUserPerInspectionNameFailureWithParam(error)))
      ))
  ))

  loadLastUpdateDate$ = createEffect(() => this.actions$.pipe(
    ofType(getLastOperationDate),
    exhaustMap(({ userId }) =>
      this.dataService.lastUpdateDate(userId).pipe(
        map((responseDAO) => getLastOperationDateSuccess(responseDAO)),
        catchError((error) => of(getLastOperationDateFailure(error)))
      ))
  ))

  loadRapportBadge$ = createEffect(() => this.actions$.pipe(
    ofType(getUserRapport),
    exhaustMap(({ inspecteurId }) =>
      this.dataService.loadBadgeReport(inspecteurId).pipe(
        map((responseDAO) => getUserRapportSuccess(responseDAO)),
        catchError((error) => of(getUserRapportFailure(error)))
      )
    )
  ))

  loadRapportCertificat$ = createEffect(() => this.actions$.pipe(
    ofType(getUserRapportCertificat),
    exhaustMap(({ userId }) =>
      this.dataService.loadCertificatReport(userId).pipe(
        map((responseDAO) => getUserRapportCertificatSuccess(responseDAO)),
        catchError((error) => of(getUserRapportCertificatFailure(error)))
      )
    )
  ))
  constructor(private actions$: Actions, private dataService: DataService) { }
}
