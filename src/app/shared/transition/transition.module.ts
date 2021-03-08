import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransitionGroupComponent } from './components/transition-group/transition-group.component';
import { TransitionGroupItemDirective } from './directives/transition-group-item/transition-group-item.directive';

@NgModule({
  declarations: [TransitionGroupItemDirective, TransitionGroupComponent],
  imports: [CommonModule],
  exports: [TransitionGroupComponent, TransitionGroupItemDirective]
})
export class TransitionModule {}
