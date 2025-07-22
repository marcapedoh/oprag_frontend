import { createSelector } from "@ngrx/store";
import { UtilisateurState } from "../reducers/utilisateur.action";

export const selectAllUtilisateur = createSelector(
  (state: UtilisateurState) => state.utilisateurs,
  (utilisateurs: any) => utilisateurs,
)
