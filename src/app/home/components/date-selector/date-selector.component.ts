import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { last } from 'lodash';
import { DateTime } from 'luxon';

@Component({
  selector: 'habi-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent implements OnInit {
  @Output()
  public selectDate = new EventEmitter<DateTime>();

  public dates: Array<DateTime> = [];
  public selectedDate: DateTime;

  ngOnInit(): void {
    this.assignDates();
    this.selectDate.emit(this.selectedDate);
  }

  public onSelect(date: DateTime): void {
    this.selectDate.emit(date);
    this.selectedDate = date;
  }

  private assignDates(): void {
    const today: DateTime = DateTime.local();

    for (let i = 6; i >= 0; i--) {
      const newDate = today.minus({ days: i });
      this.dates.push(newDate);
    }

    this.selectedDate = last(this.dates);
  }
}
