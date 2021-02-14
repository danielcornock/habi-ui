import { Action, createReducer, on } from '@ngrx/store';

import { HabitTemplatesActions } from '../actions/habit-templates.actions';
import { HabitTemplatesState } from '../models/habit-templates.model';

const initialState: HabitTemplatesState = {
  templates: []
};

const reducer = createReducer(
  initialState,
  on(HabitTemplatesActions.fetchTemplatesSuccess, (state, action) => {
    return {
      ...state,
      templates: action.templates
    };
  }),
  on(HabitTemplatesActions.createTemplateSuccess, (state, action) => {
    return {
      ...state,
      templates: [...state.templates, action.template]
    };
  })
);

export function habitTemplateReducer(
  state: HabitTemplatesState,
  action: Action
): HabitTemplatesState {
  return reducer(state, action);
}
