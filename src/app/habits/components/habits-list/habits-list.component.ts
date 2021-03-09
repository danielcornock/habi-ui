import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { HabitRecordsActions } from 'src/app/core/store/actions/habit-records.actions';
import { RootState } from 'src/app/core/store/models/root-state.model';
import { HabitRecordsSelectors } from 'src/app/core/store/selectors/habit-records.selectors';

import { HabitRecordResponse } from '../../interfaces/habit-record-response.interface';
import { HabitTemplateResponse } from '../../interfaces/habit-template-response.interface';
import { HabitsStoreService } from '../../services/habits-store/habits-store.service';

@Component({
  selector: 'habi-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: '0px', opacity: '0' }),
        animate('0.5s ease-out', style({ height: '82px', opacity: '1' }))
      ]),
      transition(':leave', [
        style({ height: '82px', opacity: '1' }),
        animate('0.5s ease-out', style({ height: '0px', opacity: '0' }))
      ])
    ])
  ]
})
export class HabitsListComponent implements OnChanges {
  @Input()
  public selectedDate: DateTime;

  public habits$: Observable<HabitRecordResponse[]>;
  public incompleteHabits$: Observable<HabitTemplateResponse[]>;

  constructor(
    private store: Store<RootState>,
    private habitsStoreService: HabitsStoreService
  ) {}

  ngOnChanges(): void {
    this.habits$ = this.store.select(
      HabitRecordsSelectors.dailyHabitRecords(this.selectedDate.toISODate())
    );
    this.incompleteHabits$ = this.habitsStoreService.getUncompletedHabits(
      this.selectedDate
    );
  }

  public onToggleCompleted(template: string): void {
    this.store.dispatch(
      HabitRecordsActions.setHabitCompleted({
        date: this.selectedDate.toISODate(),
        template
      })
    );
  }

  public onToggleIncompleted(recordId: string, completedOn: string): void {
    this.store.dispatch(
      HabitRecordsActions.setHabitIncomplete({ recordId, completedOn })
    );
  }

  public trackList(_index: number, obj: any): string {
    return obj.id;
  }
}
