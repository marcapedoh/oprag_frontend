import { createReducer, on } from "@ngrx/store";
import { clearAuthError, login, loginFailure, loginSuccess, updateUser, updateUserFailure, updateUserSuccess } from "../actions/auth.action";

export interface AuthRequest {
  username: string;
  motDePasse: string;
}

export interface AuthState {
  user: AuthRequest;
  error: string | null;
}

const intialState: AuthState = {
  user: {
    username: "",
    motDePasse: ""
  },
  error: null,

};

export const authReducer = createReducer(
  intialState,
  on(login, (state) => ({ ...state })),
  on(loginSuccess, (state, responseDAO) => ({ ...state, responseDAO })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(clearAuthError, (state) => ({ ...state })),
  on(updateUser, (state) => ({ ...state })),
  on(updateUserSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(updateUserFailure, (state, { error }) => ({ ...state, error }))
)
