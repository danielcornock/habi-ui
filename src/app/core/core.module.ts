import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconModule } from '../shared/icon/icon.module';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
  declarations: [HeaderComponent, NavMenuComponent],
  imports: [CommonModule, IconModule, RootStoreModule, RouterModule],
  exports: [NavMenuComponent, HeaderComponent]
})
export class CoreModule {}
