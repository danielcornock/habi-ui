import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RootState } from '../models/root-state.model';
import { coreReducer } from './core.reducer';

export const rootReducer: ActionReducerMap<RootState> = {
  router: routerReducer,
  core: coreReducer
};
