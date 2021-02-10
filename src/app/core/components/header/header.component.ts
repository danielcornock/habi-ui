import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HeaderAction } from '../../store/models/core-state.model';
import { RootState } from '../../store/models/root-state.model';
import { CoreSelectors } from '../../store/selectors/core.selectors';
import { RouterSelectors } from '../../store/selectors/router.selectors';

@Component({
  selector: 'habi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title$: Observable<string>;
  public headerAction$: Observable<HeaderAction>;

  constructor(private store: Store<RootState>) {}

  public ngOnInit(): void {
    this.title$ = this.store.select(RouterSelectors.selectPageTitle);
    this.headerAction$ = this.store.select(CoreSelectors.selectHeaderAction);
  }
}
