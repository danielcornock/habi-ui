import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

import { RootState } from '../models/root-state.model';
import { RouterState } from '../models/router-state.model';

const selectRouterState = (state: RootState): RouterReducerState<RouterState> =>
  state.router;

const selectPageTitle = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterState>) => state?.state.data.title
);

export const RouterSelectors = {
  selectPageTitle
};
