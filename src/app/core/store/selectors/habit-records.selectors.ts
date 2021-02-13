import { createSelector } from '@ngrx/store';

import { HabitRecordsState } from '../models/habit-records.model';
import { RootState } from '../models/root-state.model';

const selectHabitRecordsState = (state: RootState) => state.habitRecords;

const dailyHabitRecords = (date: string) =>
  createSelector(
    selectHabitRecordsState,
    (state: HabitRecordsState) => state.days[date]
  );

export const HabitRecordsSelectors = {
  dailyHabitRecords
};
