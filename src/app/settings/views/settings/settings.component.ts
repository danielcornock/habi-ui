import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationActions } from 'src/app/core/store/actions/authentication.actions';

@Component({
  selector: 'habi-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public logOut(): void {
    this.store.dispatch(AuthenticationActions.logOut());
  }
}
