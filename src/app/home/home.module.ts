import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFormTrooperModule } from 'ngx-form-trooper';

import { HabitsModule } from '../habits/habits.module';
import { IconModule } from '../shared/icon/icon.module';
import { ModalModule } from '../shared/modal/modal.module';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [HomeComponent, DateSelectorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconModule,
    ModalModule,
    HabitsModule,
    NgxFormTrooperModule
  ]
})
export class HomeModule {}
