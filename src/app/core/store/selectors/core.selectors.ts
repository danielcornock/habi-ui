import { createSelector } from '@ngrx/store';

import { RootState } from '../models/root-state.model';

const selectCoreState = (state: RootState) => state.core;

const selectHeaderAction = createSelector(
  selectCoreState,
  (state) => state.headerAction
);

export const CoreSelectors = {
  selectHeaderAction
};
