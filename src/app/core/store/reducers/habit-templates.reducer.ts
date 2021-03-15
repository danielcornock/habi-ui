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
  }),
  on(HabitTemplatesActions.editTemplateSuccess, (state, action) => {
    return {
      ...state,
      templates: state.templates.map((template) => {
        if (template.id !== action.template.id) {
          return template;
        } else {
          return action.template;
        }
      })
    };
  }),
  on(HabitTemplatesActions.deleteTemplateSuccess, (state, action) => {
    return {
      ...state,
      templates: state.templates.filter((template) => template.id !== action.id)
    };
  }),
  on(HabitTemplatesActions.togglePauseTemplateSuccess, (state, action) => {
    return {
      ...state,
      templates: state.templates.map((template) => {
        if (template.id !== action.template.id) {
          return template;
        } else {
          return action.template;
        }
      })
    };
  })
);

export function habitTemplateReducer(
  state: HabitTemplatesState,
  action: Action
): HabitTemplatesState {
  return reducer(state, action);
}
