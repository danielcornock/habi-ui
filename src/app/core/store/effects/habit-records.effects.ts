import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { HabitsApiService } from 'src/app/habits/services/habits-api/habits-api.service';

import { HabitRecordsActions } from '../actions/habit-records.actions';
import { HabitRecordsSelectors } from '../selectors/habit-records.selectors';

@Injectable()
export class HabitRecordsEffects {
  constructor(
    private actions$: Actions,
    private habitsApiService: HabitsApiService,
    private store: Store
  ) {}

  fetchWeeklyHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitRecordsActions.fetchWeeklyHabits),
      withLatestFrom(this.store.select(HabitRecordsSelectors.hasLoadedWeek)),
      filter(([_, hasLoaded]) => !hasLoaded),
      switchMap(() => {
        return this.habitsApiService
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
          );
      })
    )
  );

  fetchMonthlyHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitRecordsActions.fetchMonthlyHabits),
      withLatestFrom(
        this.store.select(HabitRecordsSelectors.monthsAlreadyLoaded)
      ),
      filter(([{ month }, loadedMonths]) => !loadedMonths.includes(month)),
      switchMap(([{ month }]) => {
        const firstDay = DateTime.fromISO(month);
        return this.habitsApiService
          .getHabitsInRange(
            firstDay.toISODate(),
            firstDay.set({ day: 31 }).toISODate()
          )
          .pipe(
            map(({ data }) =>
              HabitRecordsActions.fetchMonthlyHabitsSuccess({
                records: data,
                month
              })
            )
          );
      })
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
        return this.habitsApiService.setHabitIncomplete(recordId).pipe(
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
