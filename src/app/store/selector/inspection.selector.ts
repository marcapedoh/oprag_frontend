import { createSelector } from "@ngrx/store";
import { InspectionState } from "../reducers/inspection.reducer";

export const selectAllInspections = createSelector(
  (state: InspectionState) => state.inspections,
  (inspections: ReadonlyArray<any>) => inspections
)
