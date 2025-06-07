import { createReducer, on } from "@ngrx/store";
import { createBadge, createBadgeFailure, createBadgeSuccess, getAllBadge, getAllBadgeFailure, getAllBadgeSuccess } from "../actions/badge.action";
import { getAllChartObject, getAllChartObjectFailure, getAllChartObjectPerDate, getAllChartObjectPerDateFailure, getAllChartObjectPerDateSuccess, getAllChartObjectSuccess } from "../actions/chartObject.action";

export interface BadgeState {
  badges: ReadonlyArray<any>;
}

export interface ChartBadgesObjectState {
  chartsObjects: ReadonlyArray<any>
}

export interface ChartBadgesObjectPerDateState {
  chartsObjectsByDates: ReadonlyArray<any>
}


export const initialState: ReadonlyArray<any> = []
export const badgeReducer = createReducer(
  initialState,
  on(getAllBadge, (state) => ({ ...state })),
  on(getAllBadgeSuccess, (state, { badges }) => ({ ...state, badges })),
  on(getAllBadgeFailure, (state, { error }) => ({ ...state, error })),
  on(getAllChartObject, (state) => ({ ...state })),
  on(getAllChartObjectSuccess, (state, { chartsObjects }) => ({ ...state, chartsObjects })),
  on(getAllChartObjectFailure, (state, { error }) => ({ ...state, error })),
  on(getAllChartObjectPerDate, (state) => ({ ...state })),
  on(getAllChartObjectPerDateSuccess, (state, { chartsObjectsByDates }) => ({ ...state, chartsObjectsByDates })),
  on(getAllChartObjectPerDateFailure, (state, { error }) => ({ ...state, error })),
  on(createBadge, (state) => ({ ...state })),
  on(createBadgeSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(createBadgeFailure, (state, { error }) => ({ ...state, error }))
)
