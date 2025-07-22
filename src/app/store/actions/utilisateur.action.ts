import { createAction } from "@ngrx/store";

export const getAllUtilisateur = createAction("[Utilisateur] Get All Utilisateur", (element: string) => ({ element }))
export const getAllUtilisateurSuccess = createAction("[Utilisateur] Get All Utilisateur Success", (utilisateurs: ReadonlyArray<any>) => ({ utilisateurs }))
export const getAllUtilisateurFailure = createAction("[Utilisateur] Get All Utilisateur Failure", (error: any) => ({ error }))
