import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HabitTemplatesListComponent } from './components/habit-templates-list/habit-templates-list.component';

const routes: Routes = [
  {
    path: 'templates',
    component: HabitTemplatesListComponent,
    data: { animation: 'overlay' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitsRoutingModule {}
