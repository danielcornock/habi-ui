import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFormTrooperModule } from 'ngx-form-trooper';

import { IconModule } from '../shared/icon/icon.module';
import { ModalModule } from '../shared/modal/modal.module';
import { CreateHabitModalComponent } from './components/create-habit-modal/create-habit-modal.component';
import { DailyHabitComponent } from './components/daily-habit/daily-habit.component';
import { HabitsListComponent } from './components/habits-list/habits-list.component';

@NgModule({
  declarations: [
    CreateHabitModalComponent,
    DailyHabitComponent,
    HabitsListComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormTrooperModule,
    IconModule
  ],
  exports: [DailyHabitComponent, HabitsListComponent]
})
export class HabitsModule {}
