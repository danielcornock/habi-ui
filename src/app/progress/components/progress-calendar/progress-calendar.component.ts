import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DateTime } from 'luxon';
import { WeeklyHabitRecordResponse } from 'src/app/habits/interfaces/weekly-habit-record-response.interface';

@Component({
  selector: 'habi-progress-calendar',
  templateUrl: './progress-calendar.component.html',
  styleUrls: ['./progress-calendar.component.scss']
})
export class ProgressCalendarComponent implements OnChanges {
  @Input()
  public calendar: Array<DateTime | null>;

  @Input()
  public records: WeeklyHabitRecordResponse;

  @Input()
  public selectedDay: number;

  @Output()
  public selectDay = new EventEmitter<number>();

  public weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public formattedMonthItems: Array<{ date: DateTime; count: number } | null>;

  public ngOnChanges({ calendar, records }: SimpleChanges): void {
    if (calendar || records) {
      this.processCalendar();
    }
  }

  private processCalendar(): void {
    this.formattedMonthItems = this.calendar.map((date) => {
      if (!date) {
        return null;
      }

      const records = this.records[date.toISODate()] || [];

      return {
        date,
        count: records.length
      };
    });
  }
}
