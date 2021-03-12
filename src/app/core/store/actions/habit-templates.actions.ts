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

const openTemplatelistPage = createAction(
  `[Habit Templates] Open template list page`
);

const deleteTemplate = createAction(
  `[Habit Templates] Delete template`,
  props<{ id: string }>()
);

const deleteTemplateSuccess = createAction(
  `[Habit Templates] Delete template success`,
  props<{ id: string }>()
);

const pauseTemplate = createAction(
  `[Habit Templates] Pause template`,
  props<{ id: string }>()
);

const togglePauseTemplateSuccess = createAction(
  `[Habit Templates] Toggle pause template success`,
  props<{ template: HabitTemplateResponse }>()
);

const resumeTemplate = createAction(
  `[Habit Templates] Resume template`,
  props<{ id: string }>()
);

export const HabitTemplatesActions = {
  fetchTemplates,
  fetchTemplatesSuccess,
  openTemplateCreationForm,
  createTemplateSuccess,
  openTemplatelistPage,
  deleteTemplate,
  deleteTemplateSuccess,
  pauseTemplate,
  togglePauseTemplateSuccess,
  resumeTemplate
};
