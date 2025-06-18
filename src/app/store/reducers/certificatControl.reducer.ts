import { createReducer, on } from "@ngrx/store";
import { createCertificatControl, createCertificatControlFailure, createCertificatControlSuccess, deleteCertificatControl, deleteCertificatControlFailure, deleteCertificatControlSuccess, generateCertificatControl, generateCertificatControlFailure, generateCertificatControlSuccess, getAllCertificatControl, getAllCertificatControlFailure, getAllCertificatControlSuccess, visualiserCertificatControl, visualiserCertificatControlFailure, visualiserCertificatControlSuccess } from "../actions/certificatControl.action";

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
  on(visualiserCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(generateCertificatControl, (state) => ({ ...state })),
  on(generateCertificatControlSuccess, (state) => ({ ...state })),
  on(generateCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(deleteCertificatControl, (state) => ({ ...state })),
  on(deleteCertificatControlSuccess, (state) => ({ ...state })),
  on(deleteCertificatControlFailure, (state, { error }) => ({ ...state, error }))
)
