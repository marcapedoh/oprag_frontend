import { createReducer, on } from "@ngrx/store";
import { createVehicule, createVehiculeFailure, createVehiculeSuccess } from "../actions/vehicule.action";

export interface VehiculeState{
    vehicules:ReadonlyArray<any>;
}

export const initialState:ReadonlyArray<VehiculeState>=[]

export const vehiculeReducer=createReducer(
    initialState,
    on(createVehicule,(state)=>({...state})),
    on(createVehiculeSuccess,(state,{responseDAO})=>({...state,responseDAO})),
    on(createVehiculeFailure,(state,{error})=>({...state,error}))
)