import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationSelectors } from 'src/app/core/store/selectors/authentication.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private store: Store, private router: Router) {}

  canActivateChild(): Observable<boolean> {
    return this.store.select(AuthenticationSelectors.isLoggedIn).pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('auth/login');
        }
      })
    );
  }
}
