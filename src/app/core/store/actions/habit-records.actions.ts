import { createAction, props } from '@ngrx/store';
import { HabitRecordResponse } from 'src/app/habits/interfaces/habit-record-response.interface';
import { WeeklyHabitRecordResponse } from 'src/app/habits/interfaces/weekly-habit-record-response.interface';

const fetchWeeklyHabits = createAction('[Habit Records] Fetch weekly habits');

const fetchWeeklyHabitsSuccess = createAction(
  '[Habit Records] Fetch weekly habits success',
  props<{ records: WeeklyHabitRecordResponse }>()
);

const setHabitCompleted = createAction(
  '[Habit Records] Set habit completed',
  props<{ template: string; date: string }>()
);

const setHabitCompletedSuccess = createAction(
  '[Habit Records] Set habit completed success',
  props<{ habit: HabitRecordResponse }>()
);

const setHabitIncomplete = createAction(
  '[Habit Records] Set habit incomplete',
  props<{ recordId: string; completedOn: string }>()
);

const setHabitIncompleteSuccess = createAction(
  '[Habit Records] Set habit incomplete success',
  props<{ recordId: string; completedOn: string }>()
);

const fetchMonthlyHabits = createAction(
  '[Habit Records] Fetch monthly habits',
  props<{ month: string }>()
);

const fetchMonthlyHabitsSuccess = createAction(
  '[Habit Records] Fetch monthly habits success',
  props<{ records: WeeklyHabitRecordResponse; month: string }>()
);

const setActiveMonth = createAction(
  '[Habit Records] Set active month',
  props<{ month: string }>()
);

export const HabitRecordsActions = {
  fetchWeeklyHabits,
  fetchWeeklyHabitsSuccess,
  setHabitCompleted,
  setHabitCompletedSuccess,
  setHabitIncomplete,
  setHabitIncompleteSuccess,
  fetchMonthlyHabits,
  fetchMonthlyHabitsSuccess,
  setActiveMonth
};
