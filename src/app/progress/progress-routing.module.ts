import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './views/progress/progress.component';

export const routes: Routes = [
  {
    path: '',
    component: ProgressComponent,
    data: { title: 'Progress' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule {}
