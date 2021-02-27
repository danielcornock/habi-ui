import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from './core/services/auth/auth.service';
import { HabitTemplatesActions } from './core/store/actions/habit-templates.actions';

@Component({
  selector: 'habi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService, private store: Store) {}

  public ngOnInit(): void {
    this.authService.initialise();
    this.store.dispatch(HabitTemplatesActions.fetchTemplates());
    this.isLoggedIn$ = this.authService.isAuthenticated();
  }
}
