import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DateTime } from 'luxon';
import { map, switchMap } from 'rxjs/operators';
import { HabitsApiService } from 'src/app/habits/services/habits-api/habits-api.service';

import { HabitRecordsActions } from '../actions/habit-records.actions';

@Injectable()
export class HabitRecordsEffects {
  constructor(
    private actions$: Actions,
    private habitsApiService: HabitsApiService
  ) {}

  fetchWeeklyHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitRecordsActions.fetchWeeklyHabits),
      switchMap(() =>
        this.habitsApiService
          .getHabitsInRange(
            DateTime.local()
              .minus({ days: 7 })
              .toISODate(),
            DateTime.local().toISODate()
          )
          .pipe(
            map((data) =>
              HabitRecordsActions.fetchWeeklyHabitsSuccess({
                records: data.data
              })
            )
          )
      )
    )
  );

  setHabitCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitRecordsActions.setHabitCompleted),
      switchMap(({ template, date }) => {
        return this.habitsApiService
          .setHabitCompleted(template, date)
          .pipe(
            map((data) =>
              HabitRecordsActions.setHabitCompletedSuccess({ habit: data.data })
            )
          );
      })
    )
  );

  setHabitIncomplete = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitRecordsActions.setHabitIncomplete),
      switchMap(({ recordId, completedOn }) => {
        return this.habitsApiService
          .setHabitIncomplete(recordId)
          .pipe(
            map(() =>
              HabitRecordsActions.setHabitIncompleteSuccess({
                recordId,
                completedOn
              })
            )
          );
      })
    )
  );
}
