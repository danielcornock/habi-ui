import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFormTrooperModule } from 'ngx-form-trooper';

import { FormInputModule } from '../shared/form-input/form-input.module';
import { IconModule } from '../shared/icon/icon.module';
import { ModalModule } from '../shared/modal/modal.module';
import { CreateHabitModalComponent } from './components/create-habit-modal/create-habit-modal.component';
import { DailyHabitComponent } from './components/daily-habit/daily-habit.component';
import { HabitTemplateItemComponent } from './components/habit-template-item/habit-template-item.component';
import { HabitTemplatesListComponent } from './components/habit-templates-list/habit-templates-list.component';
import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { HabitsRoutingModule } from './habits-routing.module';

@NgModule({
  declarations: [
    CreateHabitModalComponent,
    DailyHabitComponent,
    HabitsListComponent,
    HabitTemplatesListComponent,
    HabitTemplateItemComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormTrooperModule,
    IconModule,
    FormInputModule,
    HabitsRoutingModule
  ],
  exports: [DailyHabitComponent, HabitsListComponent]
})
export class HabitsModule {}
