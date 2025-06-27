import { createAction } from "@ngrx/store";

export const getUserProfilInfo = createAction("[User-Profil] Get User Profil Information", (userId: number) => ({ userId }))
export const getUserProfilInfoSuccess = createAction("[User-Profil] Get User Profil Information success", (responseDAO: any) => ({ responseDAO }))
export const getUserProfilInfoFailure = createAction("[User-Profil] Get User Profil Information failure", (error: any) => ({ error }))

export const updateUserProfilInfo = createAction("[User-Profil] Update User Profil", (user: any) => ({ user }))
export const updateUserProfilInfoSuccess = createAction("[User-Profil] Update User Profil Success", (responseDAO: any) => ({ responseDAO }))
export const updateUserProfilInfoFailure = createAction("[User-Profil] Update User profil Failure", (error: any) => ({ error }))
