import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HabitRecordsSelectors } from 'src/app/core/store/selectors/habit-records.selectors';
import { HabitTemplatesSelectors } from 'src/app/core/store/selectors/habit-templates.selectors';

import { HabitTemplateResponse } from '../../interfaces/habit-template-response.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitsStoreService {
  constructor(private store: Store) {}

  public getUncompletedHabits(
    date: DateTime
  ): Observable<HabitTemplateResponse[]> {
    return combineLatest([
      this.store.select(
        HabitRecordsSelectors.dailyHabitRecords(date.toISODate())
      ),
      this.store.select(HabitTemplatesSelectors.templates)
    ]).pipe(
      switchMap(([dailyHabits, templates]) => {
        if (!dailyHabits) {
          return of(templates);
        } else {
          const filteredTemplates = templates.filter((template) => {
            return !dailyHabits.find(
              (habit) => habit.template.id === template.id
            );
          });

          return of(filteredTemplates);
        }
      })
    );
  }
}
