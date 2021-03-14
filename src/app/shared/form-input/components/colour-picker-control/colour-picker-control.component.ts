import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  QueryList
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { ColourOptionComponent } from '../colour-option/colour-option.component';

@Component({
  selector: 'habi-colour-picker-control',
  templateUrl: './colour-picker-control.component.html',
  styleUrls: ['./colour-picker-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColourPickerControlComponent),
      multi: true
    }
  ]
})
export class ColourPickerControlComponent
  implements AfterViewInit, ControlValueAccessor {
  @Input()
  public formControl: FormControl;

  @ContentChildren(ColourOptionComponent)
  public options: QueryList<ColourOptionComponent>;

  private val = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  public set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {}

  public ngAfterViewInit(): void {
    this.highlightSelectedValue(this.formControl.value);
  }

  public onSelectOption(value: string): void {
    this.formControl.setValue(value);
    this.highlightSelectedValue(value);
  }

  public writeValue(data: string): void {
    this.highlightSelectedValue(data);
    this.value = data;
  }

  private highlightSelectedValue(value: string): void {
    if (!this.options) {
      return;
    }

    this.options.forEach((option) => {
      if (option.value === value) {
        option.isSelected = true;
      } else {
        option.isSelected = false;
      }
    });
  }
}
