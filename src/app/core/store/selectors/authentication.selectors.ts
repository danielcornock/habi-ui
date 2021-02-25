import { createSelector } from '@ngrx/store';

import { RootState } from '../models/root-state.model';

const authSelector = (state: RootState) => state.authentication;

const authToken = createSelector(authSelector, (state) => state.authToken);
const isLoggedIn = createSelector(authSelector, (state) => !!state.authToken);

export const AuthenticationSelectors = {
  authToken,
  isLoggedIn
};
