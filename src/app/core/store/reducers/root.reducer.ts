import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RootState } from '../models/root-state.model';
import { authenticationReducer } from './authentication.reducer';
import { coreReducer } from './core.reducer';
import { habitRecordsReducer } from './habit-records.reducer';
import { habitTemplateReducer } from './habit-templates.reducer';

export const rootReducer: ActionReducerMap<RootState> = {
  router: routerReducer,
  core: coreReducer,
  habitRecords: habitRecordsReducer,
  habitTemplates: habitTemplateReducer,
  authentication: authenticationReducer
};
