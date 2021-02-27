import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { StorageKeys } from '../../constants/storage-keys.constant';
import { AuthResponse } from '../../interfaces/auth-response.interface';
import { AuthApiService } from '../../services/auth-api/auth-api.service';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { AuthenticationActions } from '../actions/authentication.actions';

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authApiService: AuthApiService,
    private router: Router,
    private storageService: StorageService
  ) {}

  public initialiseAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.initialiseAuthInfo),
      map(() =>
        this.storageService.getObject<AuthResponse>(StorageKeys.authInfo)
      ),
      filter((data) => !!data?.authToken),
      map((authDetails) =>
        AuthenticationActions.fetchLocalAuthSuccess({ authDetails })
      )
    )
  );

  public registerWithSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.openGoogleToRegister),
      switchMap(() =>
        this.authService
          .openGoogleToSignIn()
          .pipe(
            map((user) =>
              AuthenticationActions.createAccountWithGoogle({ user })
            )
          )
      )
    )
  );

  public loginWithSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.openGoogleToSignIn),
      switchMap(() =>
        this.authService
          .openGoogleToSignIn()
          .pipe(map((user) => AuthenticationActions.signInWithGoogle({ user })))
      )
    )
  );

  public createAccountWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.createAccountWithGoogle),
      switchMap(({ user }) =>
        this.authApiService.createGoogleAccount(user).pipe(
          map(({ data }) =>
            AuthenticationActions.authenticationSuccess({
              authDetails: data
            })
          )
        )
      )
    )
  );

  public signInWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationActions.signInWithGoogle),
      switchMap(({ user }) =>
        this.authApiService.signInWithGoogle(user).pipe(
          map(({ data }) =>
            AuthenticationActions.authenticationSuccess({
              authDetails: data
            })
          )
        )
      )
    )
  );

  public authenticationSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.authenticationSuccess),
        tap(() => this.router.navigateByUrl('home')),
        tap(({ authDetails }) =>
          this.storageService.setObject(StorageKeys.authInfo, authDetails)
        )
      ),
    { dispatch: false }
  );

  public logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.logOut),
        switchMap(() => this.authService.logOut()),
        tap(() => this.storageService.remove(StorageKeys.authInfo)),
        tap(() => this.router.navigateByUrl('auth/login'))
      ),
    { dispatch: false }
  );
}
