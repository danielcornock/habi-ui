import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HabitsModule } from '../habits/habits.module';
import { CalendarModule } from '../shared/calendar/calendar.module';
import { ProgressCalendarComponent } from './components/progress-calendar/progress-calendar.component';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './views/progress/progress.component';

@NgModule({
  declarations: [ProgressComponent, ProgressCalendarComponent],
  imports: [CommonModule, ProgressRoutingModule, HabitsModule, CalendarModule]
})
export class ProgressModule {}
