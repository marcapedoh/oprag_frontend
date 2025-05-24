import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess } from "../actions/auth.action";

export interface AuthRequest{
    username:string;
    motDePasse:string;
}

export interface AuthState{
    user:AuthRequest;
}

const intialState:ReadonlyArray<AuthState>=[]

export const authReducer=createReducer(
    intialState,
    on(login,(state)=>({...state})),
    on(loginSuccess,(state,responseDAO)=>({...state,responseDAO})),
    on(loginFailure,(state,{error})=> ({...state,error}))
)