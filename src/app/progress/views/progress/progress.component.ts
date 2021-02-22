import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
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
  private activeMonth;
  private activeYear;
  private isoMonth: string;

  constructor(private store: Store, private calendarService: CalendarService) {}

  ngOnInit(): void {
    const currentDate = DateTime.local();
    this.activeMonth = currentDate.get('month');
    this.activeYear = currentDate.get('year');

    this.isoMonth = DateTime.local(this.activeYear, this.activeMonth)
      .toISODate()
      .slice(0, -3);

    this.records$ = this.store.select(
      HabitRecordsSelectors.monthlyRecords(this.isoMonth)
    );
    this.store.dispatch(
      HabitRecordsActions.fetchMonthlyHabits({ month: this.isoMonth })
    );

    this.monthView = this.calendarService.generateCalendarArray(
      this.activeMonth,
      this.activeYear
    );
  }

  public selectDay(day: number): void {
    this.selectedDay = day;
    this.selectedDate = DateTime.local(this.activeYear, this.activeMonth, day);
  }
}
