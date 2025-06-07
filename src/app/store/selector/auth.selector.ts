import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/auth.reducer";


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
