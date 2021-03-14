import { Action, createReducer, on } from '@ngrx/store';
import { DateTime } from 'luxon';

import { HabitRecordsActions } from '../actions/habit-records.actions';
import { HabitRecordsState } from '../models/habit-records.model';

const initialState: HabitRecordsState = {
  days: {},
  activeMonth: DateTime.local()
    .toISODate()
    .slice(0, -3),
  hasFetchedWeek: false,
  fetchedMonths: []
};

const reducer = createReducer(
  initialState,
  on(HabitRecordsActions.fetchWeeklyHabitsSuccess, (state, action) => {
    return {
      ...state,
      days: {
        ...state.days,
        ...action.records
      },
      hasFetchedWeek: true
    };
  }),
  on(HabitRecordsActions.fetchMonthlyHabitsSuccess, (state, action) => {
    return {
      ...state,
      days: {
        ...state.days,
        ...action.records
      },
      fetchedMonths: [...state.fetchedMonths, action.month]
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
  }),
  on(HabitRecordsActions.setActiveMonth, (state, action) => {
    return {
      ...state,
      activeMonth: action.month
    };
  })
);

export function habitRecordsReducer(
  state: HabitRecordsState,
  action: Action
): HabitRecordsState {
  return reducer(state, action);
}
