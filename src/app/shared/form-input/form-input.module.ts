import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { ColourOptionComponent } from './components/colour-option/colour-option.component';
import { ColourPickerControlComponent } from './components/colour-picker-control/colour-picker-control.component';
import { FormInputColorSelectComponent } from './components/form-input-color-select/form-input-color-select.component';
import { FormInputEmojiComponent } from './components/form-input-emoji/form-input-emoji.component';

@NgModule({
  declarations: [
    ColourPickerControlComponent,
    ColourOptionComponent,
    FormInputColorSelectComponent,
    FormInputEmojiComponent
  ],
  imports: [CommonModule, PickerModule],
  exports: [
    ColourPickerControlComponent,
    ColourOptionComponent,
    FormInputColorSelectComponent,
    FormInputEmojiComponent
  ]
})
export class FormInputModule {}
