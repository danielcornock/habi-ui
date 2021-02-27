import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialLoginModule } from 'angularx-social-login';

import { IconModule } from '../shared/icon/icon.module';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { authInterceptorProviders } from './providers/auth-interceptor.provider';
import { socialAuthProviders } from './providers/social-auth.provider';
import { RootStoreModule } from './store/root-store.module';
import { AuthenticatedViewComponent } from './views/authenticated-view/authenticated-view.component';

@NgModule({
  declarations: [HeaderComponent, NavMenuComponent, AuthenticatedViewComponent],
  imports: [
    CommonModule,
    IconModule,
    RootStoreModule,
    RouterModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [...socialAuthProviders, ...authInterceptorProviders],
  exports: [NavMenuComponent, HeaderComponent]
})
export class CoreModule {}
