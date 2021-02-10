import { createAction, props } from '@ngrx/store';

import { HeaderAction } from '../models/core-state.model';

const setHeaderAction = createAction(
  '[Core] Set header action',
  props<{ headerAction: HeaderAction }>()
);

export const CoreActions = {
  setHeaderAction
};
