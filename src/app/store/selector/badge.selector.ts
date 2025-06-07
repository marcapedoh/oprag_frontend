import { createSelector } from "@ngrx/store";
import { BadgeState, ChartBadgesObjectPerDateState, ChartBadgesObjectState } from "../reducers/badge.reducer";



export const selectAllBadges = createSelector(
  (state: BadgeState) => state.badges,
  (badges: ReadonlyArray<any>) => badges
)

export const selectAllChartBadges = createSelector(
  (state: ChartBadgesObjectState) => state.chartsObjects,
  (chartsObjects: ReadonlyArray<any>) => chartsObjects
)

export const selectAllChartBadgesPerDate = createSelector(
  (state: ChartBadgesObjectPerDateState) => state.chartsObjectsByDates,
  (chartsObjectsByDates: ReadonlyArray<any>) => chartsObjectsByDates
)
export const selectOneBadgeById = (badgeId: number) =>
  createSelector(
    selectAllBadges,
    (badges) => {
      return badges.filter(badge => badge.id === badgeId)
    }
  );
