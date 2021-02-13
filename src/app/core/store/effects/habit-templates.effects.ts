import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { HabitsApiService } from 'src/app/habits/services/habits-api/habits-api.service';

import { HabitTemplatesActions } from '../actions/habit-templates.actions';

@Injectable()
export class HabitTemplatesEffects {
  constructor(
    private actions$: Actions,
    private habitsApiService: HabitsApiService
  ) {}

  fetchTemplates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => {
        return this.habitsApiService
          .getHabitTemplates()
          .pipe(
            map(({ data }) =>
              HabitTemplatesActions.fetchTemplatesSuccess({ templates: data })
            )
          );
      })
    )
  );
}
