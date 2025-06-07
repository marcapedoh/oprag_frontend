import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createChauffeur, createChauffeurFailure, createChauffeurSuccess } from "../actions/chauffeur.action";
import { catchError, concatMap, map, of, tap } from "rxjs";

@Injectable()
export class ChauffeurEffect {

    createChauffeur$ = createEffect(() => this.actions$.pipe(
        ofType(createChauffeur),
        concatMap(({ chauffeur }) =>
            this.dataService.registerChauffeur(chauffeur).pipe(
                map((responseDAO) => createChauffeurSuccess(responseDAO)),
                catchError((error: string) => of(createChauffeurFailure(error)))
            )), tap((action) => {
                if (action.type === "[Chauffeur] Create Chauffeur Success") {
                    localStorage.setItem("chauffeur", JSON.stringify(action.responseDAO))
                }
            })
    ))

    constructor(private actions$: Actions, private dataService: DataService) { }
}