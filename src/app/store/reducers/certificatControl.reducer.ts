import { createReducer, on } from "@ngrx/store";
import { createCertificatControl, createCertificatControlFailure, createCertificatControlSuccess, getAllCertificatControl, getAllCertificatControlFailure, getAllCertificatControlSuccess, visualiserCertificatControl, visualiserCertificatControlFailure, visualiserCertificatControlSuccess } from "../actions/certificatControl.action";

export interface CertificatControlState {
  certificatControls: ReadonlyArray<any>;
  error: string | null
}

export const initialCertificatControl: ReadonlyArray<any> = []
export const certificatControlReducer = createReducer(
  initialCertificatControl,
  on(getAllCertificatControl, (state) => ({ ...state })),
  on(getAllCertificatControlSuccess, (state, { certificatControls }) => ({ ...state, certificatControls })),
  on(getAllCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(createCertificatControl, (state) => ({ ...state })),
  on(createCertificatControlSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(createCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(visualiserCertificatControl, (state) => ({ ...state })),
  on(visualiserCertificatControlSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(visualiserCertificatControlFailure, (state, { error }) => ({ ...state, error }))
)
