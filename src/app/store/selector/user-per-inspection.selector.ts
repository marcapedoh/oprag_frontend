import { createSelector } from "@ngrx/store";
import { UsersPerInspectionState } from "../reducers/user-per-inspection.reducer";

export const selectAllUserPerInspection = createSelector(
  (state: UsersPerInspectionState) => state.usersInspection,
  (usersInspection: ReadonlyArray<any>) => usersInspection,
)

