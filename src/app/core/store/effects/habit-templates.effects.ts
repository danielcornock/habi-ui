import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { CreateHabitModalComponent } from 'src/app/habits/components/create-habit-modal/create-habit-modal.component';
import { HabitTemplatesListComponent } from 'src/app/habits/components/habit-templates-list/habit-templates-list.component';
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

  openTemplateList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HabitTemplatesActions.openTemplatelistPage),
        tap(() => {
          this.modalService.openFullScreenModal(HabitTemplatesListComponent);
        })
      ),
    { dispatch: false }
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
}
