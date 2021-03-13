import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HabitTemplatesActions } from 'src/app/core/store/actions/habit-templates.actions';
import { HabitTemplatesSelectors } from 'src/app/core/store/selectors/habit-templates.selectors';
import { ModalHeaderAction } from 'src/app/shared/modal/interfaces/modal-header-action.interface';

import { HabitTemplateResponse } from '../../interfaces/habit-template-response.interface';

@Component({
  selector: 'habi-habit-templates-list',
  templateUrl: './habit-templates-list.component.html',
  styleUrls: ['./habit-templates-list.component.scss']
})
export class HabitTemplatesListComponent implements OnInit {
  public templates$: Observable<HabitTemplateResponse[]>;
  public action: ModalHeaderAction;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.templates$ = this.store.select(HabitTemplatesSelectors.templates);
    this.action = {
      icon: 'plus',
      action: () =>
        this.store.dispatch(HabitTemplatesActions.openTemplateCreationForm())
    };
  }

  public async onDeleteTemplate(id: string): Promise<void> {
    this.store.dispatch(HabitTemplatesActions.deleteTemplate({ id }));
  }

  public onEditTemplate(id: string): void {}

  public pauseTemplate(id: string): void {
    this.store.dispatch(
      HabitTemplatesActions.pauseTemplate({
        id
      })
    );
  }

  public resumeTemplate(id: string): void {
    this.store.dispatch(HabitTemplatesActions.resumeTemplate({ id }));
  }
}
