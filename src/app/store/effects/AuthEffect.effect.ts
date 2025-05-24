import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, loginFailure, loginSuccess, registerUser, registerUserFailure, registerUserSuccess } from "../actions/auth.action";
import { catchError, concatMap, map, of, switchMap, tap } from "rxjs";
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{

    authenticateUser$= createEffect(()=> this.actions$.pipe(
        ofType(login),
        switchMap((authRequest)=>
        this.authService.login(authRequest).pipe(
            map((responseDAO)=>loginSuccess(responseDAO)),
            catchError((error:string)=> of(loginFailure(error)))
        )),tap((action)=>{
            if(action.type==='[Auth] loginSuccess'){
                this.router.navigate(["/inspection/collection"])
            }
        })
    ))


    registerUser$=createEffect(()=> this.actions$.pipe(
        ofType(registerUser),
        concatMap((registrationRequest)=>
        this.authService.register(registrationRequest).pipe(
            map((responseDAO)=>registerUserSuccess(responseDAO)),
            catchError((error:string)=> of(registerUserFailure(error)))
        )),tap((action)=>{
            if(action.type==="[RegisterUser] Register User Success"){
                this.router.navigate(["inpection/collection"])
            }
        })
    ))

   
    constructor(private actions$:Actions,private authService:AuthServiceService,private router:Router){}
}