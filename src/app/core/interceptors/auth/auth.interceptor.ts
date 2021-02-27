import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { RootState } from '../../store/models/root-state.model';
import { AuthenticationSelectors } from '../../store/selectors/authentication.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<RootState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store.select(AuthenticationSelectors.authToken).pipe(
      take(1),
      switchMap((authToken) => {
        const newRequest = request.clone({
          setHeaders: {
            Authorization: authToken
          }
        });
        return next.handle(newRequest);
      })
    );
  }
}
