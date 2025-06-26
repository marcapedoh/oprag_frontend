import { createReducer, on } from "@ngrx/store"
import { getUserProfilInfo, getUserProfilInfoFailure, getUserProfilInfoSuccess } from "../actions/user-profil.action"

export interface userProfil {
  user: any
}


export const initialState: any = {}

export const userProfilReducer = createReducer(
  initialState,
  on(getUserProfilInfo, (state) => ({ ...state })),
  on(getUserProfilInfoSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(getUserProfilInfoFailure, (state, { error }) => ({ ...state, error }))
)
