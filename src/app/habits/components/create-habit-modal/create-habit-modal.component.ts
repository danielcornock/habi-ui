import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';
import { map } from 'lodash';
import { FormContainer, FormFactory, FormInputType } from 'ngx-form-trooper';
import { ModalHeaderAction } from 'src/app/shared/modal/interfaces/modal-header-action.interface';

import { HabitColours } from '../../constants/habit-colours.constant';
import { HabitTemplateResponse } from '../../interfaces/habit-template-response.interface';
import { HabitsApiService } from '../../services/habits-api/habits-api.service';

@Component({
  selector: 'habi-create-habit-modal',
  templateUrl: './create-habit-modal.component.html',
  styleUrls: ['./create-habit-modal.component.scss']
})
export class CreateHabitModalComponent implements OnInit {
  public action: ModalHeaderAction;
  public form: FormContainer;

  constructor(
    private formFactory: FormFactory,
    private habitsApiService: HabitsApiService,
    private bottomSheetRef: MatBottomSheetRef,
    @Inject(MAT_BOTTOM_SHEET_DATA)
    private data: { template: HabitTemplateResponse }
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    const habitColours = map(HabitColours, (value, label) => {
      return { label, value };
    });

    this.form = this.formFactory.createForm([
      {
        name: 'title',
        label: 'Habit title',
        defaultValue: this.data.template?.title || '',
        type: FormInputType.TEXT,
        validators: {
          required: true
        }
      },
      {
        name: 'color',
        label: 'Colour',
        defaultValue: this.data.template?.color || HabitColours.Cherry,
        validators: {
          required: true
        },
        options: habitColours
      },
      {
        name: 'flair',
        label: 'Icon',
        defaultValue: this.data.template?.flair || '📕',
        validators: {
          required: true
        }
      }
    ]);
  }

  public submitForm(): void {
    if (this.form.isInvalid) {
      this.form.formGroup.markAllAsTouched();
      return;
    }

    if (this.data.template) {
      this.updateTemplate();
    } else {
      this.createTemplate();
    }
  }

  private createTemplate(): void {
    this.habitsApiService
      .createHabitTemplate(this.form.value)
      .subscribe((data) => {
        this.bottomSheetRef.dismiss(data.data);
      });
  }

  private updateTemplate(): void {
    this.habitsApiService
      .updateHabitTemplate(this.data.template.id, this.form.value)
      .subscribe((res) => {
        this.bottomSheetRef.dismiss(res.data);
      });
  }
}
