import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createBadge, createBadgeFailure, createBadgeSuccess, createQrCodeImage, getAllBadge, getAllBadgeFailure, getAllBadgeSuccess } from "../actions/badge.action";
import { catchError, concatMap, exhaustMap, map, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { getAllChartObject, getAllChartObjectFailure, getAllChartObjectPerDate, getAllChartObjectPerDateFailure, getAllChartObjectPerDateSuccess, getAllChartObjectSuccess } from "../actions/chartObject.action";

@Injectable()
export class BadgeEffect {

  loadBadge$ = createEffect(() => this.actions$.pipe(
    ofType(getAllBadge),
    exhaustMap(({ element }) =>
      this.dataService.loadData(element).pipe(
        map((responseDAO) => getAllBadgeSuccess(responseDAO)),
        catchError((error) => of(getAllBadgeFailure(error)))
      ))
  )
  )

  createBadge$ = createEffect(() => this.actions$.pipe(
    ofType(createBadge),
    concatMap(({ badge }) =>
      this.dataService.createObject("Badges", badge).pipe(
        map((responseDAO) => createBadgeSuccess(responseDAO)),
        catchError((error: string) => of(createBadgeFailure(error)))
      )), tap((action) => {
        if (action.type === "[Badge] create Badge sucess") {
          this.dataService.createQrCodeImage(action.responseDAO.numero)
          this.router.navigate(["badge/collection"])
        }
      })
  ))

  loadChartsObjects$ = createEffect(() => this.actions$.pipe(
    ofType(getAllChartObject),
    exhaustMap(() =>
      this.dataService.countAllPerDay().pipe(
        map((responseDAO) => getAllChartObjectSuccess(responseDAO)),
        catchError((error: string) => of(getAllChartObjectFailure(error)))
      ))
  ))
  chartsObjectsByDates$ = createEffect(() => this.actions$.pipe(
    ofType(getAllChartObjectPerDate),
    exhaustMap(({ dateDebut, dateFin }) =>
      this.dataService.countAllPerInterval(dateDebut, dateFin).pipe(
        map((responseDAO) => getAllChartObjectPerDateSuccess(responseDAO)),
        catchError((error: string) => of(getAllChartObjectPerDateFailure(error)))
      ))
  ))

  createBadgeQrCode$ = createEffect(() => this.actions$.pipe(
    ofType(createQrCodeImage),
    concatMap(({ numero }) =>
      this.dataService.createQrCodeImageWithNgRx(numero).pipe(
        tap((blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'qrCodeImage.png';
          a.click();
          window.URL.revokeObjectURL(url);
        })
      )
    )
  ))
  constructor(private actions$: Actions, private dataService: DataService, private router: Router) { }
}
