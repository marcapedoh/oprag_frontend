import { createAction } from "@ngrx/store";
import { AuthRequest } from "../reducers/auth.reducer";

export const login = createAction("[Auth] login", (authRequest: AuthRequest) => (authRequest));
export const loginSuccess = createAction("[Auth] loginSuccess", (responseDAO: any) => ({ responseDAO }))
export const loginFailure = createAction("[Auth] loginFailure", (error: string) => ({ error }))
export const clearAuthError = createAction('[Auth] Clear Error');

export const registerUser = createAction("[RegisterUser] Register User", (registerRequest: any) => ({ registerRequest }));
export const registerUserSuccess = createAction("[RegisterUser] Register User Success", (authenticationResponse: any) => ({ authenticationResponse }))
export const registerUserFailure = createAction("[RegisterUser] Register User Failure", (error: string) => ({ error }))

export const registerChauffeur = createAction("[RegisterChauffeur] Register Chauffeur", (chauffeurDAO: any) => ({ chauffeurDAO }));
export const registerChauffeurSuccess = createAction("[RegisterChauffeur] Register Chauffeur Success", (authenticationResponse: any) => ({ authenticationResponse }))
export const registerChauffeurFailure = createAction("[Register Chauffeur] Register Chauffeur Failure", (error: string) => ({ error }));


export const updateUser = createAction("[User] update user", (user: any) => ({ user }))
export const updateUserSuccess = createAction("[User] update user success", (responseDAO: any) => ({ responseDAO }))
export const updateUserFailure = createAction("[User] update User failure", (error: any) => ({ error }))
