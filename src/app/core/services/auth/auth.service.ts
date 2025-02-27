import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser
} from 'angularx-social-login';
import { from, Observable } from 'rxjs';

import { AuthenticationActions } from '../../store/actions/authentication.actions';
import { RootState } from '../../store/models/root-state.model';
import { AuthenticationSelectors } from '../../store/selectors/authentication.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private socialAuthService: SocialAuthService,
    private store: Store<RootState>
  ) {}

  public initialise(): void {
    this.store.dispatch(AuthenticationActions.initialiseAuthInfo());
  }

  public isAuthenticated(): Observable<boolean> {
    return this.store.select(AuthenticationSelectors.isLoggedIn);
  }

  public openGoogleToSignIn(): Observable<SocialUser> {
    return from(this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID));
  }

  public logOut(): Observable<void> {
    return from(this.socialAuthService.signOut());
  }
}
