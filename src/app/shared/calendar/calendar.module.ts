import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/icon.module';
import { MonthSelectorComponent } from './components/month-selector/month-selector.component';

@NgModule({
  declarations: [MonthSelectorComponent],
  imports: [CommonModule, IconModule],
  exports: [MonthSelectorComponent]
})
export class CalendarModule {}
