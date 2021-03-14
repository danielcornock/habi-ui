import { createSelector } from '@ngrx/store';
import { reduce } from 'lodash';

import { HabitRecordsState } from '../models/habit-records.model';
import { RootState } from '../models/root-state.model';

const selectHabitRecordsState = (state: RootState) => state.habitRecords;

const dailyHabitRecords = (date: string) =>
  createSelector(
    selectHabitRecordsState,
    (state: HabitRecordsState) => state.days[date] || []
  );

const monthlyRecords = (date: string) =>
  createSelector(selectHabitRecordsState, (state: HabitRecordsState) => {
    return reduce(
      state.days,
      (accum, value, key) => {
        if (key.includes(date)) {
          accum[key] = value;
        }

        return accum;
      },
      {}
    );
  });

const activeMonth = createSelector(
  selectHabitRecordsState,
  (state: HabitRecordsState) => state.activeMonth
);

const hasLoadedWeek = createSelector(
  selectHabitRecordsState,
  (state) => state.hasFetchedWeek
);

const monthsAlreadyLoaded = createSelector(
  selectHabitRecordsState,
  (state) => state.fetchedMonths
);

export const HabitRecordsSelectors = {
  dailyHabitRecords,
  activeMonth,
  monthlyRecords,
  hasLoadedWeek,
  monthsAlreadyLoaded
};
