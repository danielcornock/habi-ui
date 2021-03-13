import { Location } from '@angular/common';
import { Component, Input, OnInit, Optional } from '@angular/core';
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

  constructor(
    @Optional() private dialogRef: MatBottomSheetRef<T>,
    private locationService: Location
  ) {}

  public closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.dismiss();
    } else {
      this.locationService.back();
    }
  }
}
