import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTime } from 'luxon';
import { WeeklyHabitRecordResponse } from 'src/app/habits/interfaces/weekly-habit-record-response.interface';

@Component({
  selector: 'habi-progress-calendar',
  templateUrl: './progress-calendar.component.html',
  styleUrls: ['./progress-calendar.component.scss']
})
export class ProgressCalendarComponent {
  @Input()
  public calendar: Array<DateTime | null>;

  @Input()
  public records: WeeklyHabitRecordResponse;

  @Input()
  public selectedDay: number;

  @Output()
  public selectDay = new EventEmitter<number>();

  public weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
}
