import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createCertificatControl, createCertificatControlFailure, createCertificatControlSuccess, getAllCertificatControl, getAllCertificatControlFailure, getAllCertificatControlSuccess, visualiserCertificatControl, visualiserCertificatControlFailure, visualiserCertificatControlSuccess } from "../actions/certificatControl.action";
import { catchError, concatMap, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { showToast } from "../actions/toast.action";

@Injectable()
export class CertificatControlEffects {

  loadCertificatControl$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCertificatControl),
    exhaustMap(({ element }) =>
      this.dataService.loadData(element).pipe(
        map((responseDAO) => getAllCertificatControlSuccess(responseDAO)),
        catchError((error) => of(getAllCertificatControlFailure(error)))
      ))
  ))

  createCertificatControl$ = createEffect(() => this.actions$.pipe(
    ofType(createCertificatControl),
    concatMap(({ certificatControl }) =>
      this.dataService.createObject("CertificatControls", certificatControl).pipe(
        map((responseDAO) => createCertificatControlSuccess(responseDAO)),
        catchError((error: string) => of(createCertificatControlFailure(error)))
      )), tap((action) => {
        if (action.type === "[CertificatControl] create CertificatControl success") {
          this.dataService.createReport("pdf", action.responseDAO.id)
          this.router.navigate(["inspection/collection"])
        }
      })
  ))

  visualiserCertificatControl$ = createEffect(() => this.actions$.pipe(
    ofType(visualiserCertificatControl),
    concatMap(({ certificatControl }) =>
      this.dataService.createObject("CertificatControls", certificatControl).pipe(
        map((responseDAO) => visualiserCertificatControlSuccess(responseDAO)),
        catchError((error: string) => of(visualiserCertificatControlFailure(error)))
      )), tap((action) => {
        if (action.type === "[CertificatControl] visualiser CertificatControl success") {
          this.dataService.createReport("html", action.responseDAO.id)

        }
      })
  ))

  showToastOnFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCertificatControlFailure),
      map(() =>
        showToast('Erreur lors de la création du rapport', 'danger'
        )
      )
    )
  );

  showToastOnSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCertificatControlSuccess),
      map(() =>
        showToast('Rapport créé avec succès', 'success'
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService, private router: Router) { }
}
