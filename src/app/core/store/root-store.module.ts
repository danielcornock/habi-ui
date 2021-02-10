import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RouterEffects } from './effects/router.effects';
import { rootReducer } from './reducers/root.reducer';
import { RouterSerializer } from './utils/router-serializer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([RouterEffects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class RootStoreModule {}
