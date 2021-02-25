import { createAction, props } from '@ngrx/store';
import { SocialUser } from 'angularx-social-login';

import { AuthResponse } from '../../interfaces/auth-response.interface';

const prefix = '[Authentication]';

const initialiseAuthInfo = createAction(`${prefix} Initialise auth info`);

const openGoogleToRegister = createAction(`${prefix} Open google to register`);

const openGoogleToSignIn = createAction(`${prefix} Open google to sign in`);

const createAccountWithGoogle = createAction(
  `${prefix} Create account with google`,
  props<{ user: SocialUser }>()
);

const signInWithGoogle = createAction(
  `${prefix} Sign in with google`,
  props<{ user: SocialUser }>()
);

const authenticationSuccess = createAction(
  `${prefix} Login success`,
  props<{ authDetails: AuthResponse }>()
);

const fetchLocalAuthSuccess = createAction(
  `${prefix} Fetch local auth success`,
  props<{ authDetails: AuthResponse }>()
);

export const AuthenticationActions = {
  initialiseAuthInfo,
  openGoogleToRegister,
  openGoogleToSignIn,
  createAccountWithGoogle,
  authenticationSuccess,
  signInWithGoogle,
  fetchLocalAuthSuccess
};
