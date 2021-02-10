import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../shared/icon/icon.module';
import { DailyHabitComponent } from './components/daily-habit/daily-habit.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [HomeComponent, DateSelectorComponent, DailyHabitComponent],
  imports: [CommonModule, HomeRoutingModule, IconModule]
})
export class HomeModule {}
