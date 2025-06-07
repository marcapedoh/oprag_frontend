
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToastState } from "../reducers/toast.reducer";

export const selectToastState = createFeatureSelector<ToastState>('toast');

export const selectToast = createSelector(
  selectToastState,
  (state: ToastState) => state
);

export const selectToastMessage = createSelector(
  selectToastState,
  (state: ToastState) => state.message
);

export const selectToastType = createSelector(
  selectToastState,
  (state: ToastState) => state.toastType
);
