import { Action, createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';

import { HabitRecordsActions } from '../actions/habit-records.actions';
import { HabitRecordsState } from '../models/habit-records.model';

const initialState: HabitRecordsState = {
  days: {},
  activeMonth: DateTime.local().toFormat('YYYY-MM')
};

const reducer = createReducer(
  initialState,
  on(HabitRecordsActions.fetchWeeklyHabitsSuccess, (state, action) => {
    return {
      ...state,
      days: {
        ...state.days,
        ...action.records
      }
    };
  }),
  on(HabitRecordsActions.setHabitCompletedSuccess, (state, action) => {
    return {
      ...state,
      days: {
        ...state.days,
        [action.habit.completedOn]: [
          ...(state.days[action.habit.completedOn] || []),
          action.habit
        ]
      }
    };
  }),
  on(HabitRecordsActions.setHabitIncompleteSuccess, (state, action) => {
    return {
      ...state,
      days: {
        ...state.days,
        [action.completedOn]: state.days[action.completedOn].filter(
          (existingHabit) => existingHabit.id !== action.recordId
        )
      }
    };
  })
);

export function habitRecordsReducer(
  state: HabitRecordsState,
  action: Action
): HabitRecordsState {
  return reducer(state, action);
}
