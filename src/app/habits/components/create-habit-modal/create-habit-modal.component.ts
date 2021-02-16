import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormContainer, FormFactory, FormInputType } from 'ngx-form-trooper';
import { ModalHeaderAction } from 'src/app/shared/modal/interfaces/modal-header-action.interface';

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
    private bottomSheetRef: MatBottomSheetRef
  ) {}

  ngOnInit(): void {
    this.assignAction();
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formFactory.createForm([
      {
        name: 'title',
        label: 'Habit title',
        type: FormInputType.TEXT,
        validators: {
          required: true
        }
      },
      {
        name: 'color',
        label: 'Colour',
        defaultValue: '#aa11ee',
        validators: {
          required: true
        }
      },
      {
        name: 'flair',
        label: 'Emoji',
        defaultValue: '⚽️',
        validators: {
          required: true
        }
      }
    ]);
  }

  private assignAction(): void {
    this.action = {
      label: 'Create',
      action: () => this.createTemplate()
    };
  }

  private createTemplate(): void {
    if (this.form.isInvalid) {
      this.form.formGroup.markAllAsTouched();
      return;
    }

    this.habitsApiService
      .createHabitTemplate(this.form.value)
      .subscribe((data) => {
        this.bottomSheetRef.dismiss(data.data);
      });
  }
}
