import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormTrooperModule } from 'ngx-form-trooper';

import { IconModule } from '../shared/icon/icon.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { BrandingComponent } from './components/branding/branding.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, BrandingComponent],
  imports: [
    CommonModule,
    IconModule,
    AuthRoutingModule,
    NgxFormTrooperModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
