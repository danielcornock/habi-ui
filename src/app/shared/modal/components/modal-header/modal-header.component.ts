import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { ModalHeaderAction } from '../../interfaces/modal-header-action.interface';

@Component({
  selector: 'habi-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent<T> implements OnInit {
  @Input()
  public action: ModalHeaderAction;

  ngOnInit(): void {}

  constructor(private dialogRef: MatBottomSheetRef<T>) {}

  public closeModal(): void {
    this.dialogRef.dismiss();
  }
}
