import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor() {}

  public generateCalendarArray(
    month: number,
    year: number
  ): Array<DateTime | null> {
    const dateObj = DateTime.local(year, month);
    const firstWeekdayOfMonth = dateObj.weekday;
    const daysInMonth = dateObj.daysInMonth;

    const calendarLoopCount = daysInMonth + firstWeekdayOfMonth;

    const monthArray = [];
    let dateAdded = 1;

    for (let i = 1; i < calendarLoopCount; i++) {
      if (i < firstWeekdayOfMonth) {
        monthArray.push(null);
      } else if (i >= calendarLoopCount) {
        monthArray.push(null);
      } else {
        monthArray.push(DateTime.local(year, month, dateAdded));
        dateAdded++;
      }
    }

    return monthArray;
  }
}
