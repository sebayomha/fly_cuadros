import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CustomReuseStrategy } from './core/reuse-strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
    (await import('./features/dashboard/dashboard.module')).DashboardModule,
  },
  {
    path: 'cuadros',
    loadChildren: async () =>
    (await import('./features/painting/painting.module')).PaintingModule,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
