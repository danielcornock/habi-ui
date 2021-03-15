import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { CoreActions } from 'src/app/core/store/actions/core.actions';
import { HabitRecordsActions } from 'src/app/core/store/actions/habit-records.actions';
import { RootState } from 'src/app/core/store/models/root-state.model';

@Component({
  selector: 'habi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public selectedDate: DateTime;

  constructor(private store: Store<RootState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(HabitRecordsActions.fetchWeeklyHabits());
    this.store.dispatch(
      CoreActions.setHeaderAction({
        headerAction: {
          icon: 'edit',
          action: () => {
            this.router.navigateByUrl('habits/templates');
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

  public onSelectDate(date: DateTime): void {
    this.selectedDate = date;
  }
}
