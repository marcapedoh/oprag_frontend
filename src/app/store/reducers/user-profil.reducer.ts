import { createReducer, on } from "@ngrx/store"
import { getUserProfilInfo, getUserProfilInfoFailure, getUserProfilInfoSuccess, updateUserProfilInfo, updateUserProfilInfoFailure, updateUserProfilInfoSuccess } from "../actions/user-profil.action"

export interface userProfil {
  profil: any
}


export const initialState: any = {}

export const userProfilReducer = createReducer(
  initialState,
  on(getUserProfilInfo, (state) => ({ ...state })),
  on(getUserProfilInfoSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(getUserProfilInfoFailure, (state, { error }) => ({ ...state, error })),
  on(updateUserProfilInfo, (state) => ({ ...state })),
  on(updateUserProfilInfoSuccess, (state, { responseDAO }) => ({ ...state, responseDAO })),
  on(updateUserProfilInfoFailure, (state, { error }) => ({ ...state, error }))
)
