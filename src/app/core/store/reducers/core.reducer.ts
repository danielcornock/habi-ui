import { Action, createReducer, on } from '@ngrx/store';

import { CoreActions } from '../actions/core.actions';
import { CoreState } from '../models/core-state.model';

const initialState: CoreState = {
  headerAction: undefined
};

const reducer = createReducer(
  initialState,
  on(CoreActions.setHeaderAction, (state, { headerAction }) => {
    return {
      ...state,
      headerAction
    };
  })
);

export function coreReducer(state: CoreState, action: Action): CoreState {
  return reducer(state, action);
}
