import { Component, Input } from '@angular/core';

import { ColourPickerControlComponent } from '../colour-picker-control/colour-picker-control.component';

@Component({
  selector: 'habi-colour-option',
  templateUrl: './colour-option.component.html',
  styleUrls: ['./colour-option.component.scss']
})
export class ColourOptionComponent {
  @Input()
  public value: string;

  public isSelected: boolean;

  constructor(private colourPickerControl: ColourPickerControlComponent) {}

  public selectOption(): void {
    this.colourPickerControl.onSelectOption(this.value);
  }
}
