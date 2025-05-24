import { createAction } from "@ngrx/store";

export const getAllBadge=createAction("[Badge] Get all Badge",(element:string)=>({element}));
export const getAllBadgeSuccess=createAction("[Badge] Get all Badge sucess",(badges:ReadonlyArray<any>)=>({badges}))
export const getAllBadgeFailure=createAction("[Badge] Get all Badge Failure",(error:string)=>({error}))