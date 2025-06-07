import { createAction } from "@ngrx/store";

export const createChauffeur=createAction("[Chauffeur] Create Chauffeur",(chauffeur:any)=>({chauffeur}))
export const createChauffeurSuccess=createAction("[Chauffeur] Create Chauffeur Success",(responseDAO:any)=>({responseDAO}))
export const createChauffeurFailure=createAction("[Chauffeur] Create Chauffeur Failure",(error:any)=>({error}))