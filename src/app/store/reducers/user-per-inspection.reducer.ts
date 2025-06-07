import { createReducer, on } from "@ngrx/store";
import { getAllUserPerInspectionName, getAllUserPerInspectionNameFailure, getAllUserPerInspectionNameSuccess } from "../actions/user-per-inspection.action";

export interface UsersPerInspection {
  usersPerInspection: ReadonlyArray<any>;
}


export const initialState: ReadonlyArray<any> = []

export const userPerInspectionReducer = createReducer(
  initialState,
  on(getAllUserPerInspectionName, (state) => ({ ...state })),
  on(getAllUserPerInspectionNameSuccess, (state, { usersInspection }) => ({ ...state, usersInspection })),
  on(getAllUserPerInspectionNameFailure, (state, { error }) => ({ ...state, error }))
)
