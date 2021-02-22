import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HabitRecordsActions } from 'src/app/core/store/actions/habit-records.actions';
import { HabitRecordsSelectors } from 'src/app/core/store/selectors/habit-records.selectors';
import { WeeklyHabitRecordResponse } from 'src/app/habits/interfaces/weekly-habit-record-response.interface';
import { CalendarService } from 'src/app/shared/calendar/services/calendar/calendar.service';

@Component({
  selector: 'habi-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  public monthView;
  public records$: Observable<WeeklyHabitRecordResponse>;

  public selectedDate: DateTime;
  public selectedDay;
  public isoMonth$: Observable<string>;
  private activeMonth;
  private activeYear;

  constructor(private store: Store, private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.isoMonth$ = this.store.select(HabitRecordsSelectors.activeMonth).pipe(
      tap((month) => {
        const dateObj = DateTime.fromISO(month);
        this.activeMonth = dateObj.month;
        this.activeYear = dateObj.year;
        this.records$ = this.store.select(
          HabitRecordsSelectors.monthlyRecords(month)
        );
        this.store.dispatch(HabitRecordsActions.fetchMonthlyHabits({ month }));

        this.monthView = this.calendarService.generateCalendarArray(
          this.activeMonth,
          this.activeYear
        );
      })
    );
  }

  public selectDay(day: number): void {
    this.selectedDay = day;
    this.selectedDate = DateTime.local(this.activeYear, this.activeMonth, day);
  }

  public onChangeMonth(month: string): void {
    this.store.dispatch(HabitRecordsActions.setActiveMonth({ month }));
  }
}
