import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';

import { IconModule } from '../icon/icon.module';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalService } from './services/modal/modal.service';

@NgModule({
  declarations: [ModalHeaderComponent],
  imports: [CommonModule, MatDialogModule, IconModule, MatBottomSheetModule],
  providers: [ModalService],
  exports: [ModalHeaderComponent]
})
export class ModalModule {}
