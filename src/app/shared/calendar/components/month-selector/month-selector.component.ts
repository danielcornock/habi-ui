import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'habi-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.scss']
})
export class MonthSelectorComponent implements OnChanges {
  @Input()
  public activeMonth: string;

  @Output()
  public changeMonth = new EventEmitter<string>();

  private activeMonthObject: DateTime;

  constructor() {}

  public ngOnChanges(): void {
    this.activeMonthObject = DateTime.fromISO(this.activeMonth);
  }

  public goBackOneMonth(): void {
    const newMonth = this.activeMonthObject.minus({ month: 1 });
    this.changeMonth.emit(newMonth.toISODate().slice(0, -3));
  }

  public goForwardOneMonth(): void {
    const newMonth = this.activeMonthObject.plus({ month: 1 });
    this.changeMonth.emit(newMonth.toISODate().slice(0, -3));
  }
}
