import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CertificatControlState } from "../reducers/certificatControl.reducer";


export const selectAllCertificatControls = createSelector(
  (state: CertificatControlState) => state.certificatControls,
  (certificatControls: ReadonlyArray<any>) => certificatControls
)

