import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { CoreActions } from 'src/app/core/store/actions/core.actions';
import { HabitRecordsActions } from 'src/app/core/store/actions/habit-records.actions';
import { HabitTemplatesActions } from 'src/app/core/store/actions/habit-templates.actions';
import { RootState } from 'src/app/core/store/models/root-state.model';
import { HabitRecordsSelectors } from 'src/app/core/store/selectors/habit-records.selectors';
import { HabitRecordResponse } from 'src/app/habits/interfaces/habit-record-response.interface';
import { HabitTemplateResponse } from 'src/app/habits/interfaces/habit-template-response.interface';
import { HabitsStoreService } from 'src/app/habits/services/habits-store/habits-store.service';
import { ModalService } from 'src/app/shared/modal/services/modal/modal.service';

@Component({
  selector: 'habi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public habits$: Observable<HabitRecordResponse[]>;
  public incompleteHabit$: Observable<HabitTemplateResponse[]>;

  private selectedDate: DateTime;

  constructor(
    private store: Store<RootState>,
    private habitsStoreService: HabitsStoreService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(HabitRecordsActions.fetchWeeklyHabits());
    this.store.dispatch(
      CoreActions.setHeaderAction({
        headerAction: {
          icon: 'plus',
          action: () => {
            this.store.dispatch(
              HabitTemplatesActions.openTemplateCreationForm()
            );
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(
      CoreActions.setHeaderAction({ headerAction: undefined })
    );
  }

  public onSelectDate(date: DateTime): void {
    this.selectedDate = date;
    this.habits$ = this.store.select(
      HabitRecordsSelectors.dailyHabitRecords(date.toISODate())
    );
    this.incompleteHabit$ = this.habitsStoreService.getUncompletedHabits(date);
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
}
