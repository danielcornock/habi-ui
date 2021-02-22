import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HabitsModule } from '../habits/habits.module';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './views/progress/progress.component';
import { ProgressCalendarComponent } from './components/progress-calendar/progress-calendar.component';

@NgModule({
  declarations: [ProgressComponent, ProgressCalendarComponent],
  imports: [CommonModule, ProgressRoutingModule, HabitsModule]
})
export class ProgressModule {}
