import { createSelector } from '@ngrx/store';

import { HabitTemplatesState } from '../models/habit-templates.model';
import { RootState } from '../models/root-state.model';

const selectHabitTemplates = (state: RootState) => state.habitTemplates;

const templates = createSelector(
  selectHabitTemplates,
  (state: HabitTemplatesState) => state.templates
);

const templatesCount = createSelector(
  selectHabitTemplates,
  (state) => state.templates.length
);

export const HabitTemplatesSelectors = {
  templates,
  templatesCount
};
