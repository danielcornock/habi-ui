import { Component, OnInit } from '@angular/core';
import { NgxFormInputComponent } from 'ngx-form-trooper';

@Component({
  selector: 'habi-form-input-color-select',
  templateUrl: './form-input-color-select.component.html',
  styleUrls: ['./form-input-color-select.component.scss']
})
export class FormInputColorSelectComponent extends NgxFormInputComponent
  implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }
}
