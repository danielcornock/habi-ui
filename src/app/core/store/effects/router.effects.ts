import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';

import { RouterState } from '../models/router-state.model';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private titleService: Title) {}

  updateTitle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        tap((action: RouterNavigationAction<RouterState>) => {
          const pageTitle = action.payload.routerState.data?.title;

          const suffix = pageTitle ? `| ${pageTitle}` : '';
          this.titleService.setTitle(`Habi ${suffix}`);
        })
      ),
    { dispatch: false }
  );
}
