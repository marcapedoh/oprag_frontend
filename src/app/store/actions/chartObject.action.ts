import { createAction } from "@ngrx/store";

export const getAllChartObject = createAction("[Badge] Get All Chart Badge Object")
export const getAllChartObjectSuccess = createAction("[Badge] Get All Chart Badge Object Success", (chartsObjects: ReadonlyArray<any>) => ({ chartsObjects }))
export const getAllChartObjectFailure = createAction("[Badge] Get All Chart Badge Object Failure", (error: string) => ({ error }))


export const getAllChartObjectPerDate = createAction("[Badge] Get All Chart Badge Object Per Date", (dateDebut: string, dateFin: string) => ({ dateDebut, dateFin }))
export const getAllChartObjectPerDateSuccess = createAction("[Badge] Get All Chart Badge Object Per Date Success", (chartsObjectsByDates: any) => ({ chartsObjectsByDates }))
export const getAllChartObjectPerDateFailure = createAction("[Badge] Get All Chart Object Per Date Failure", (error: string) => ({ error }))

