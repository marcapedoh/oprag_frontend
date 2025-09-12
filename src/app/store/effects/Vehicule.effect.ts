import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createVehicule, createVehiculeFailure, createVehiculeSuccess } from "../actions/vehicule.action";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Injectable()
export class VehiculeEffect {

  createVehicule$ = createEffect(() => this.actions$.pipe(
    ofType(createVehicule),
    concatMap(({ vehicule }) =>
      this.dataService.createObject("Vehicules", vehicule).pipe(
        map((responseDAO) => createVehiculeSuccess(responseDAO)),
        catchError((error: string) => of(createVehiculeFailure(error)))
      ))
  ))

  constructor(private actions$: Actions, private dataService: DataService, private notificationService: NotificationService) { }
}
