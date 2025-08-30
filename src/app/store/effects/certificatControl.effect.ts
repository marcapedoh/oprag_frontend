import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createCertificatControl, createCertificatControlFailure, createCertificatControlSuccess, createInspectionMontant, createInspectionMontantFailure, createInspectionMontantSuccess, deleteCertificatControl, deleteCertificatControlFailure, deleteCertificatControlSuccess, deleteInspectionMontant, deleteInspectionMontantFailure, deleteInspectionMontantSuccess, generateCertificatControl, getAllCertificatControl, getAllCertificatControlFailure, getAllCertificatControlSuccess, getCertificatControlsAmount, getCertificatControlsAmountFailure, getCertificatControlsAmountSuccess, getInspectionMontant, getInspectionMontantFailure, getInspectionMontantSuccess, visualiserCertificatControl, visualiserCertificatControlFailure, visualiserCertificatControlSuccess } from "../actions/certificatControl.action";
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

  generateCertificate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateCertificatControl),
      concatMap(({ certificatControlId }) =>
        this.dataService.createReportWithNgrx("pdf", certificatControlId).pipe(
          tap((blob: Blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'inspectionFiche.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
          })
        )
      )
    ),
  );

  deleteCertificatControl$ = createEffect(() => this.actions$.pipe(
    ofType(deleteCertificatControl),
    concatMap(({ certificatControlId }) =>
      this.dataService.deleteCertificatControl(certificatControlId).pipe(
        map((responseDAO) => deleteCertificatControlSuccess(certificatControlId)),
        catchError((error: string) => of(deleteCertificatControlFailure(error)))
      ))
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


  createInspectionMontant$ = createEffect(() => this.actions$.pipe(
    ofType(createInspectionMontant),
    concatMap(({ inspectionMontant }) =>
      this.dataService.createObject("MontantInspection", inspectionMontant).pipe(
        map((responseDAO) => createInspectionMontantSuccess(responseDAO)),
        catchError((error) => of(createInspectionMontantFailure(error)))
      )
    )
  )

  )

  getInspectionMontant$ = createEffect(() => this.actions$.pipe(
    ofType(getInspectionMontant),
    exhaustMap(({ element }) =>
      this.dataService.loadData(element).pipe(
        map((montant) => getInspectionMontantSuccess(montant)),
        catchError((error) => of(getInspectionMontantFailure(error)))
      )
    )
  ))

  deleteInspectionMontant$ = createEffect(() => this.actions$.pipe(
    ofType(deleteInspectionMontant),
    concatMap(({ id }) =>
      this.dataService.deleteInspectionMontant(id).pipe(
        map(() => deleteInspectionMontantSuccess()),
        catchError((error) => of(deleteInspectionMontantFailure(error)))
      )
    )
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

  totalAmountCertificatControls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCertificatControlsAmount),
      concatMap(() =>
        this.dataService.totalCertificatControlsAmount().pipe(
          map((totalAMount) => getCertificatControlsAmountSuccess(totalAMount)),
          catchError(() => of(getCertificatControlsAmountFailure()))
        )
      )
    ))
  constructor(private actions$: Actions, private dataService: DataService, private router: Router) { }
}
