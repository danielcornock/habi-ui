import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from '../interceptors/auth/auth.interceptor';

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
