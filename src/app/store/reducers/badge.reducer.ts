import { createReducer, on } from "@ngrx/store";
import { getAllBadge, getAllBadgeFailure, getAllBadgeSuccess } from "../actions/badge.action";

export interface BadgeState{
    badges:ReadonlyArray<any>;
}

export const initialState:ReadonlyArray<any>=[]
export const badgeReducer=createReducer(
    initialState,
    on(getAllBadge,(state)=>({...state})),
    on(getAllBadgeSuccess,(state,{badges})=>({...state,badges})),
    on(getAllBadgeFailure,(state,{error})=>({...state,error}))
)