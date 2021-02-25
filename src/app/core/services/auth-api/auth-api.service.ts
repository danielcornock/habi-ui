import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

import { AuthResponse } from '../../interfaces/auth-response.interface';
import { HttpResponse } from '../../interfaces/http-response.interface';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private httpService: HttpService) {}

  public createGoogleAccount(user: SocialUser): HttpResponse<AuthResponse> {
    return this.httpService.post('auth/social-signup/google', user);
  }

  public signInWithGoogle({ idToken }: SocialUser): HttpResponse<AuthResponse> {
    return this.httpService.post('auth/social-login/google', { idToken });
  }
}
