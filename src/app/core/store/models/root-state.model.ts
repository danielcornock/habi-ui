import { RouterReducerState } from '@ngrx/router-store';

import { AuthenticationState } from './authentication-state.model';
import { CoreState } from './core-state.model';
import { HabitRecordsState } from './habit-records.model';
import { HabitTemplatesState } from './habit-templates.model';
import { RouterState } from './router-state.model';

export interface RootState {
  router: RouterReducerState<RouterState>;
  core: CoreState;
  habitRecords: HabitRecordsState;
  habitTemplates: HabitTemplatesState;
  authentication: AuthenticationState;
}
