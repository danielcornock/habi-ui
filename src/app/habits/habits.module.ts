import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFormTrooperModule } from 'ngx-form-trooper';

import { ModalModule } from '../shared/modal/modal.module';
import { CreateHabitModalComponent } from './components/create-habit-modal/create-habit-modal.component';

@NgModule({
  declarations: [CreateHabitModalComponent],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormTrooperModule
  ]
})
export class HabitsModule {}
