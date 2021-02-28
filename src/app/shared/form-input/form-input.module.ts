import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColourOptionComponent } from './components/colour-option/colour-option.component';
import { ColourPickerControlComponent } from './components/colour-picker-control/colour-picker-control.component';
import { FormInputColorSelectComponent } from './components/form-input-color-select/form-input-color-select.component';

@NgModule({
  declarations: [
    ColourPickerControlComponent,
    ColourOptionComponent,
    FormInputColorSelectComponent
  ],
  imports: [CommonModule],
  exports: [
    ColourPickerControlComponent,
    ColourOptionComponent,
    FormInputColorSelectComponent
  ]
})
export class FormInputModule {}
