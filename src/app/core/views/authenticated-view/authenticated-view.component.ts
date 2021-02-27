import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HabitTemplatesActions } from '../../store/actions/habit-templates.actions';

@Component({
  selector: 'habi-authenticated-view',
  templateUrl: './authenticated-view.component.html',
  styleUrls: ['./authenticated-view.component.scss']
})
export class AuthenticatedViewComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HabitTemplatesActions.fetchTemplates());
  }
}
