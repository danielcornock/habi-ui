import { Action, createReducer, on } from '@ngrx/store';

import { AuthenticationActions } from '../actions/authentication.actions';
import { AuthenticationState } from '../models/authentication-state.model';

const initialState: AuthenticationState = {
  authToken: '',
  email: '',
  name: ''
};

const reducer = createReducer(
  initialState,
  on(AuthenticationActions.authenticationSuccess, (state, action) => {
    return {
      ...state,
      ...action.authDetails
    };
  }),
  on(AuthenticationActions.fetchLocalAuthSuccess, (state, action) => {
    return {
      ...state,
      ...action.authDetails
    };
  })
);

export function authenticationReducer(
  state: AuthenticationState,
  action: Action
): AuthenticationState {
  return reducer(state, action);
}
