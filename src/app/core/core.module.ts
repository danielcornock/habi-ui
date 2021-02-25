import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialLoginModule } from 'angularx-social-login';

import { IconModule } from '../shared/icon/icon.module';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { socialAuthProviders } from './providers/social-auth.provider';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [HeaderComponent, NavMenuComponent],
  imports: [
    CommonModule,
    IconModule,
    RootStoreModule,
    RouterModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [...socialAuthProviders],
  exports: [NavMenuComponent, HeaderComponent]
})
export class CoreModule {}
