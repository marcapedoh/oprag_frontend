import { createAction } from "@ngrx/store";

export const getAllUserPerInspectionName = createAction("[User-Inspection] Get All User Per Inspection", (inspectionName: string) => ({ inspectionName }))
export const getAllUserPerInspectionNameSuccess = createAction("[User-Inspection] Get All User Per Inspection Success", (usersInspection: ReadonlyArray<any>) => ({ usersInspection }))
export const getAllUserPerInspectionNameFailure = createAction("[User-Inspection] Get All User Per Inspection Failure", (error: string) => ({ error }))
