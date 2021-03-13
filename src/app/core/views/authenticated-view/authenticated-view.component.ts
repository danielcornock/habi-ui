import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { routerOverlayAnimation } from '../../animations/router-overlay.animation';
import { HabitTemplatesActions } from '../../store/actions/habit-templates.actions';

@Component({
  selector: 'habi-authenticated-view',
  templateUrl: './authenticated-view.component.html',
  styleUrls: ['./authenticated-view.component.scss'],
  animations: [routerOverlayAnimation]
})
export class AuthenticatedViewComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HabitTemplatesActions.fetchTemplates());
  }

  public prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.animation;
  }
}
