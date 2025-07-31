import { createAction } from "@ngrx/store";

export const getAllInspection = createAction("[Inspection] Get All Inspection")
export const getAllInspectionSuccess = createAction("[Inspection] Get all Inspection success", (inspections: any) => ({ inspections }))
export const getAllInspectionFailure = createAction("[Inspection] Get all Inspection failure", (error: any) => ({ error }))

export const createInspection = createAction("[Inspection] Create Inspection", (inspection: any) => ({ inspection }))
export const createInspectionSuccess = createAction("[Inspection] Create Inspection Success", (responseDAO: any) => ({ responseDAO }))
export const createInspectionFailure = createAction("[Inspection] Create Inspection Failure", (error: any) => ({ error }))

export const deleteInspection = createAction("[Inspection] delete Inspection", (inspectionId: number) => ({ inspectionId }))
export const deleteInspectionSuccess = createAction("[Inspection] delete Inspection Sucess")
export const deleteInspectionFailure = createAction("[Inspection] delete Inspection failure")
