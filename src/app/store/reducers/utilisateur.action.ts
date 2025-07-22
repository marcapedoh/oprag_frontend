import { createReducer, on } from "@ngrx/store"
import { getAllUtilisateur, getAllUtilisateurFailure, getAllUtilisateurSuccess } from "../actions/utilisateur.action"

export interface UtilisateurState {
  utilisateurs: ReadonlyArray<any>
}

export const initialState: ReadonlyArray<UtilisateurState> = []

export const utilisateurReducer = createReducer(
  initialState,
  on(getAllUtilisateur, (state) => ({ ...state })),
  on(getAllUtilisateurSuccess, (state, { utilisateurs }) => ({ ...state, utilisateurs })),
  on(getAllUtilisateurFailure, (state, { error }) => ({ ...state, error }))
)
