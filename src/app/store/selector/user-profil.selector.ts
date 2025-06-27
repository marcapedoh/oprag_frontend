import { createSelector } from "@ngrx/store";
import { userProfil } from "../reducers/user-profil.reducer";

export const selectUserProfil = createSelector(
  (state: userProfil) => state.profil,
  (profil: any) => profil,
)

