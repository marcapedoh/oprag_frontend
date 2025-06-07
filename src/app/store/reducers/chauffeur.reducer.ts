import { createReducer, on } from "@ngrx/store";
import { createChauffeur, createChauffeurFailure, createChauffeurSuccess } from "../actions/chauffeur.action";

export interface ChauffeurState{
    chauffeurs:ReadonlyArray<any>;
}

export const initialState:ReadonlyArray<ChauffeurState>=[]

export const chauffeurReducer=createReducer(
    initialState,
    on(createChauffeur,(state)=>({...state})),
    on(createChauffeurSuccess,(state,responseDAO)=>({...state,responseDAO})),
    on(createChauffeurFailure,(state,{error})=>({...state,error}))
)