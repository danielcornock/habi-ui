import { Provider } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig
} from 'angularx-social-login';

export const socialAuthProviders: Provider[] = [
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '878190953881-jnnde9r474ch0pb0hmap49qumauarlhd.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig
  }
];
