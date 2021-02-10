import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './views/progress/progress.component';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule, ProgressRoutingModule]
})
export class ProgressModule {}
