import { createAction, props } from '@ngrx/store';
import { HabitTemplateResponse } from 'src/app/habits/interfaces/habit-template-response.interface';

const fetchTemplates = createAction('[Habit Templates] Fetch templates');

const fetchTemplatesSuccess = createAction(
  '[Habit Templates] Fetch templates success',
  props<{ templates: Array<HabitTemplateResponse> }>()
);

export const HabitTemplatesActions = {
  fetchTemplates,
  fetchTemplatesSuccess
};
