import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createChauffeur, createChauffeurFailure, createChauffeurSuccess } from "../actions/chauffeur.action";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { NotificationService } from "src/app/services/notification-service/notification.service";

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
          this.notificationService.success("Chauffeur créé avec succès")
        } else {
          this.notificationService.error("Erreur lors de l'ajout du chauffeur")
        }
      })
  ))

  constructor(private actions$: Actions, private dataService: DataService, private notificationService: NotificationService) { }
}
