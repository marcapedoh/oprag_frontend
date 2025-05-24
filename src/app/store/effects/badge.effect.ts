import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { getAllBadge, getAllBadgeFailure, getAllBadgeSuccess } from "../actions/badge.action";
import { catchError, exhaustMap, map, of } from "rxjs";

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
    constructor(private actions$: Actions, private dataService: DataService) { }
}