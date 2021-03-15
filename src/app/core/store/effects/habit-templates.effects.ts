import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
      ofType(HabitTemplatesActions.fetchTemplates),
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

  openTemplateForm$ = createEffect(() =>
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

  openTemplateEditForm = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitTemplatesActions.openTemplateEditForm),
      switchMap(({ template }) =>
        this.modalService
          .openFullScreenModal<
            { template: HabitTemplateResponse },
            HabitTemplateResponse
          >(CreateHabitModalComponent, {
            template
          })
          .pipe(
            filter((data) => !!data),
            map((response) =>
              HabitTemplatesActions.editTemplateSuccess({ template: response })
            )
          )
      )
    )
  );

  deleteHabit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitTemplatesActions.deleteTemplate),
      filter(() =>
        confirm(
          'Are you sure you want to delete this template? It will remove it entirely from your history.'
        )
      ),
      switchMap(({ id }) =>
        this.habitsApiService
          .deleteHabitTemplate(id)
          .pipe(map(() => HabitTemplatesActions.deleteTemplateSuccess({ id })))
      )
    )
  );

  pauseHabit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitTemplatesActions.pauseTemplate),
      filter(() =>
        confirm(
          'Are you sure you want to stop tracking this habit? It will no longer appear in your list of habits, but can be reactivated in the future.'
        )
      ),
      switchMap(({ id }) =>
        this.habitsApiService.toggleHabitTemplatePaused(id, true).pipe(
          map(({ data }) =>
            HabitTemplatesActions.togglePauseTemplateSuccess({
              template: data
            })
          )
        )
      )
    )
  );

  resumeHabit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitTemplatesActions.resumeTemplate),
      switchMap(({ id }) =>
        this.habitsApiService.toggleHabitTemplatePaused(id, false).pipe(
          map(({ data }) =>
            HabitTemplatesActions.togglePauseTemplateSuccess({
              template: data
            })
          )
        )
      )
    )
  );
}
