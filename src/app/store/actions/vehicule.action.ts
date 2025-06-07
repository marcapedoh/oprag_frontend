import { createAction } from "@ngrx/store";

export const createVehicule=createAction("[Vehicule] Create Vehicule",(vehicule:any)=>({vehicule}))
export const createVehiculeSuccess=createAction("[Vehicule] Create Vehicule Success",(responseDAO)=>({responseDAO}))
export const createVehiculeFailure=createAction("[Vehicule] Create Vehicule Failure",(error:any)=>({error}))