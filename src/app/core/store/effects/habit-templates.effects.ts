import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs/operators';
import { CreateHabitModalComponent } from 'src/app/habits/components/create-habit-modal/create-habit-modal.component';
import { HabitTemplateResponse } from 'src/app/habits/interfaces/habit-template-response.interface';
import { HabitsApiService } from 'src/app/habits/services/habits-api/habits-api.service';
import { ModalService } from 'src/app/shared/modal/services/modal/modal.service';

import { HabitTemplatesActions } from '../actions/habit-templates.actions';

@Injectable()
export class HabitTemplatesEffects {
  constructor(
    private actions$: Actions,
    private habitsApiService: HabitsApiService,
    private modalService: ModalService
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

  openTemplateForm = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitTemplatesActions.openTemplateCreationForm),
      switchMap(() =>
        this.modalService
          .openFullScreenModal<undefined, HabitTemplateResponse>(
            CreateHabitModalComponent
          )
          .pipe(
            filter((data) => !!data),
            map((data) =>
              HabitTemplatesActions.createTemplateSuccess({ template: data })
            )
          )
      )
    )
  );
}
