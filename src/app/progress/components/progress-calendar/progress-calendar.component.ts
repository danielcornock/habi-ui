import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
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

  @Input()
  public templatesCount: number;

  @Output()
  public selectDay = new EventEmitter<number>();

  public formattedMonthItems: Array<{ date: DateTime; count: number } | null>;
  public templatesCount$: Observable<number>;

  public ngOnChanges({ calendar, records }: SimpleChanges): void {
    if (calendar || records) {
      this.processCalendar();
    }
  }

  public onSelectDay(item: { date: DateTime; count: number } | null): void {
    if (item) {
      this.selectDay.emit(item.date.day);
    }
  }

  public getBubbleSize(item: { date: DateTime; count: number }): number {
    if (item?.count) {
      return item.count / this.templatesCount + 0.4;
    } else {
      return 0;
    }
  }

  public trackByFn(item: { date: DateTime; count: number }): any {
    return item.count;
  }

  private processCalendar(): void {
    this.formattedMonthItems = this.calendar.map((date) => {
      if (!date) {
        return null;
      }

      const records = this.records[date.toISODate()] || [];

      return {
        date,
        count: records.length,
        action: () => this.selectDay.emit(date.day)
      };
    });
  }
}
