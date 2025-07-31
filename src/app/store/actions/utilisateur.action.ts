import { createAction } from "@ngrx/store";

export const getAllUtilisateur = createAction("[Utilisateur] Get All Utilisateur", (element: string) => ({ element }))
export const getAllUtilisateurSuccess = createAction("[Utilisateur] Get All Utilisateur Success", (utilisateurs: ReadonlyArray<any>) => ({ utilisateurs }))
export const getAllUtilisateurFailure = createAction("[Utilisateur] Get All Utilisateur Failure", (error: any) => ({ error }))

export const changeUserState = createAction("[Utilisateur] change User State", (userId: number) => ({ userId }));
export const changeUserStateSuccess = createAction("[Utilisateur] change User State success")
export const changeUserStateFailure = createAction("[Utilisateur] change User State failure")
