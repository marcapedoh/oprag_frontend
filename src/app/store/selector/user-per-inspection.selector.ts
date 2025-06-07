import { createSelector } from "@ngrx/store";
import { UsersPerInspection } from "../reducers/user-per-inspection.reducer";

export const selectAllUserPerInspection = createSelector(
  (state: UsersPerInspection) => state.usersPerInspection,
  (usersPerInspection: ReadonlyArray<any>) => usersPerInspection
)

