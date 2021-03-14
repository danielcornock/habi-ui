import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth/auth.guard';
import { AuthenticatedViewComponent } from './core/views/authenticated-view/authenticated-view.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: AuthenticatedViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'progress',
        data: { animation: 2 },
        loadChildren: () =>
          import('./progress/progress.module').then((m) => m.ProgressModule)
      },
      {
        path: 'home',
        data: { animation: 1 },
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'settings',
        data: { animation: 4 },
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule)
      },
      {
        path: 'habits',
        loadChildren: () =>
          import('./habits/habits.module').then((m) => m.HabitsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
