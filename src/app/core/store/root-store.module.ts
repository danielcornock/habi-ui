import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {
  NavigationActionTiming,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ModalModule } from 'src/app/shared/modal/modal.module';

import { AuthenticationEffects } from './effects/authentication.effects';
import { HabitRecordsEffects } from './effects/habit-records.effects';
import { HabitTemplatesEffects } from './effects/habit-templates.effects';
import { RouterEffects } from './effects/router.effects';
import { rootReducer } from './reducers/root.reducer';
import { RouterSerializer } from './utils/router-serializer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      RouterEffects,
      HabitRecordsEffects,
      HabitTemplatesEffects,
      AuthenticationEffects
    ]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation
    }),
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: []
})
export class RootStoreModule {}
