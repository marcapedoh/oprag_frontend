import { createReducer, on } from "@ngrx/store";
import { createInspection, createInspectionFailure, createInspectionSuccess, deleteInspection, deleteInspectionFailure, deleteInspectionSuccess, getAllInspection, getAllInspectionFailure, getAllInspectionSuccess } from "../actions/inspection.action";

export interface InspectionState {
  inspections: any;
}

export const initialState: ReadonlyArray<InspectionState> = []

export const inspectionReducer = createReducer(
  initialState,
  on(createInspection, (state) => ({ ...state })),
  on(createInspectionSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(createInspectionFailure, (state, { error }) => ({ ...state, error })),
  on(getAllInspection, (state) => ({ ...state })),
  on(getAllInspectionSuccess, (state, { inspections }) => ({ ...state, inspections })),
  on(getAllInspectionFailure, (state, { error }) => ({ ...state, error })),
  on(deleteInspection, (state) => ({ ...state })),
  on(deleteInspectionSuccess, (state) => ({ ...state })),
  on(deleteInspectionFailure, (state, error) => ({ ...state, error }))
)
