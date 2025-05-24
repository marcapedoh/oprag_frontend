import { createSelector } from "@ngrx/store";
import { BadgeState } from "../reducers/badge.reducer";

export const selectAllBadges=createSelector(
    (state:BadgeState)=>state.badges,
    (badges:ReadonlyArray<any>)=>badges
)