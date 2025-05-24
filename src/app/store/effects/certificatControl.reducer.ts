import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataService } from "src/app/services/data.service";
import { createCertificatControl, createCertificatControlFailure, createCertificatControlSuccess, getAllCertificatControl, getAllCertificatControlFailure, getAllCertificatControlSuccess } from "../actions/certificatControl.action";
import { catchError, concatMap, exhaustMap, map, of, switchMap } from "rxjs";

@Injectable()
export class CertificatControlEffects{

    loadCertificatControl$=createEffect(()=>this.actions$.pipe(
        ofType(getAllCertificatControl),
        exhaustMap(({element})=>
        this.dataService.loadData(element).pipe(
            map((responseDAO)=> getAllCertificatControlSuccess(responseDAO)),
            catchError((error)=>of(getAllCertificatControlFailure(error)))
        ))
    ))

    createCertificatControl$=createEffect(()=>this.actions$.pipe(
        ofType(createCertificatControl),
        concatMap((certificatControl)=>
            this.dataService.createObject("CertificatControls",certificatControl).pipe(
                map((responseDAO)=>createCertificatControlSuccess(responseDAO)),
                catchError((error:string)=>of(createCertificatControlFailure(error)))
            ))
    ))

    constructor(private actions$:Actions,private dataService:DataService,){}
}