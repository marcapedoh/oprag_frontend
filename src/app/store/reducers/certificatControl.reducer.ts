import { createReducer, on } from "@ngrx/store";
import { createCertificatControl, createCertificatControlFailure, createCertificatControlSuccess, deleteCertificatControl, deleteCertificatControlFailure, deleteCertificatControlSuccess, generateCertificatControl, generateCertificatControlFailure, generateCertificatControlSuccess, getAllCertificatControl, getAllCertificatControlFailure, getAllCertificatControlSuccess, getCertificatControlsAmount, getCertificatControlsAmountFailure, getCertificatControlsAmountSuccess, visualiserCertificatControl, visualiserCertificatControlFailure, visualiserCertificatControlSuccess } from "../actions/certificatControl.action";

export interface CertificatControlState {
  certificatControls: ReadonlyArray<any>;
  totalAmount: number;
  error: string | null
}

export const initialCertificatControl: CertificatControlState = {
  certificatControls: [],
  totalAmount: 0,
  error: null
};
export const certificatControlReducer = createReducer(
  initialCertificatControl,
  on(getAllCertificatControl, (state) => ({ ...state })),
  //   on(getAllCertificatControlSuccess, (state, { certificatControls }) => ({ ...state, certificatControls })),
  on(getAllCertificatControlSuccess, (state, { certificatControls }) => ({
    ...state,
    certificatControls
  })),
  //   on(getAllCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(getAllCertificatControlFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(createCertificatControl, (state) => ({ ...state })),
  //   on(createCertificatControlSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(createCertificatControlSuccess, (state, { responseDAO }) => ({
    ...state,
    certificatControls: [...state.certificatControls, responseDAO]
  })),
  //   on(createCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(visualiserCertificatControl, (state) => ({ ...state })),
  on(visualiserCertificatControlSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(visualiserCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(createCertificatControlFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(generateCertificatControl, (state) => ({ ...state })),
  on(generateCertificatControlSuccess, (state) => ({ ...state })),
  on(generateCertificatControlFailure, (state, { error }) => ({ ...state, error })),
  on(deleteCertificatControl, (state) => ({ ...state })),
  //   on(deleteCertificatControlSuccess, (state) => ({ ...state })),
  on(deleteCertificatControlSuccess, (state, { id }) => ({
    ...state,
    certificatControls: state.certificatControls.filter(c => c.id !== id)
  })),
  //   on(deleteCertificatControlFailure, (state, { error }) => ({ ...state, error }))
  on(deleteCertificatControlFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(getCertificatControlsAmount, (state) => ({ ...state })),
  on(getCertificatControlsAmountSuccess, (state, { totalAmount }) => ({ ...state, totalAmount })),
  on(getCertificatControlsAmountFailure, (state) => ({ ...state }))
)

// export const certificatControlReducer = createReducer(
//   initialCertificatControl,

//   on(getAllCertificatControlSuccess, (state, { certificatControls }) => ({
//     ...state,
//     certificatControls
//   })),

//   on(getAllCertificatControlFailure, (state, { error }) => ({
//     ...state,
//     error
//   })),

//   on(createCertificatControlSuccess, (state, { responseDAO }) => ({
//     ...state,
//     certificatControls: [...state.certificatControls, responseDAO]
//   })),

//   on(createCertificatControlFailure, (state, { error }) => ({
//     ...state,
//     error
//   })),

//   on(deleteCertificatControlSuccess, (state, { id }) => ({
//     ...state,
//     certificatControls: state.certificatControls.filter(c => c.id !== id)
//   })),

//   on(deleteCertificatControlFailure, (state, { error }) => ({
//     ...state,
//     error
//   }))
// );
