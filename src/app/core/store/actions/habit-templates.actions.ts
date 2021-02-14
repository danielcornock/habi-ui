import { createAction, props } from '@ngrx/store';
import { HabitTemplateResponse } from 'src/app/habits/interfaces/habit-template-response.interface';

const fetchTemplates = createAction('[Habit Templates] Fetch templates');

const fetchTemplatesSuccess = createAction(
  '[Habit Templates] Fetch templates success',
  props<{ templates: Array<HabitTemplateResponse> }>()
);

const createTemplateSuccess = createAction(
  '[Habit Templates] Create template success',
  props<{ template: HabitTemplateResponse }>()
);

const openTemplateCreationForm = createAction(
  '[Habit Templates] Open template creation form'
);

export const HabitTemplatesActions = {
  fetchTemplates,
  fetchTemplatesSuccess,
  openTemplateCreationForm,
  createTemplateSuccess
};
