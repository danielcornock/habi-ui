import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoreActions } from 'src/app/core/store/actions/core.actions';
import { HabitRecordsActions } from 'src/app/core/store/actions/habit-records.actions';
import { HabitRecordsSelectors } from 'src/app/core/store/selectors/habit-records.selectors';
import { WeeklyHabitRecordResponse } from 'src/app/habits/interfaces/weekly-habit-record-response.interface';
import { CalendarService } from 'src/app/shared/calendar/services/calendar/calendar.service';

@Component({
  selector: 'habi-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnDestroy {
  public monthView;
  public records$: Observable<WeeklyHabitRecordResponse>;

  public selectedDate: DateTime;
  public selectedDay;
  public isoMonth$: Observable<string>;
  private activeMonth;
  private activeYear;

  constructor(
    private store: Store,
    private calendarService: CalendarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      CoreActions.setHeaderAction({
        headerAction: {
          icon: 'list',
          action: () => {
            this.router.navigateByUrl('habits/templates');
          }
        }
      })
    );
    this.isoMonth$ = this.store.select(HabitRecordsSelectors.activeMonth).pipe(
      tap((month) => {
        const dateObj = DateTime.fromISO(month);
        this.activeMonth = dateObj.month;
        this.activeYear = dateObj.year;
        this.records$ = this.store.select(
          HabitRecordsSelectors.monthlyRecords(month)
        );
        this.store.dispatch(HabitRecordsActions.fetchMonthlyHabits({ month }));

        if (dateObj.hasSame(DateTime.local(), 'month')) {
          this.selectDay(DateTime.local().day);
        } else {
          this.selectDay(1);
        }

        this.monthView = this.calendarService.generateCalendarArray(
          this.activeMonth,
          this.activeYear
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(
      CoreActions.setHeaderAction({
        headerAction: null
      })
    );

    this.store.dispatch(HabitRecordsActions.resetActiveMonth());
  }

  public selectDay(day: number): void {
    this.selectedDay = day;
    this.selectedDate = DateTime.local(this.activeYear, this.activeMonth, day);
  }

  public onChangeMonth(month: string): void {
    this.store.dispatch(HabitRecordsActions.setActiveMonth({ month }));
  }
}
