import { createReducer, on } from "@ngrx/store";
import { getAllUserPerInspectionName, getAllUserPerInspectionNameFailure, getAllUserPerInspectionNameFailureWithParam, getAllUserPerInspectionNameSuccess, getAllUserPerInspectionNameSuccessWithParam, getAllUserPerInspectionNameWithParam, getLastOperationDate, getLastOperationDateFailure, getLastOperationDateSuccess, getUserRapport, getUserRapportCertificat, getUserRapportCertificatSuccess, getUserRapportFailure, getUserRapportSuccess } from "../actions/user-per-inspection.action";

export interface UsersPerInspectionState {
  usersInspection: ReadonlyArray<any>;
  lastUpdateDate: any;
}


export const initialState: ReadonlyArray<any> = []

export const userPerInspectionReducer = createReducer(
  initialState,
  on(getAllUserPerInspectionName, (state) => ({ ...state })),
  on(getAllUserPerInspectionNameSuccess, (state, { usersInspection }) => ({ ...state, usersInspection })),
  on(getAllUserPerInspectionNameFailure, (state, { error }) => ({ ...state, error })),
  on(getAllUserPerInspectionNameWithParam, (state) => ({ ...state })),
  on(getAllUserPerInspectionNameSuccessWithParam, (state, { usersInspection }) => ({ ...state, usersInspection })),
  on(getAllUserPerInspectionNameFailureWithParam, (state, { error }) => ({ ...state, error })),
  on(getLastOperationDate, (state) => ({ ...state })),
  on(getLastOperationDateSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(getLastOperationDateFailure, (state, { error }) => ({ ...state, error })),
  on(getUserRapport, (state) => ({ ...state })),
  on(getUserRapportSuccess, (state, { rapportBadge }) => ({ ...state, rapportBadge })),
  on(getUserRapportFailure, (state, { error }) => ({ ...state, error })),
  on(getUserRapportCertificat, (state) => ({ ...state })),
  on(getUserRapportCertificatSuccess, (state, { certificatRapport }) => ({ ...state, certificatRapport }))
)
