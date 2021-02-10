import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { of } from 'rxjs';
import { CoreActions } from 'src/app/core/store/actions/core.actions';
import { RootState } from 'src/app/core/store/models/root-state.model';

@Component({
  selector: 'habi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public habits$ = of([]);

  constructor(private store: Store<RootState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(
      CoreActions.setHeaderAction({
        headerAction: {
          icon: 'plus',
          action: () => {
            this.router.navigateByUrl('home/create-habit');
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(
      CoreActions.setHeaderAction({ headerAction: undefined })
    );
  }

  public onSelectDate(date: DateTime): void {}

  public onToggleCompleted(): void {}
}
