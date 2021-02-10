import { RouterReducerState } from '@ngrx/router-store';

import { CoreState } from './core-state.model';
import { RouterState } from './router-state.model';

export interface RootState {
  router: RouterReducerState<RouterState>;
  core: CoreState;
}
