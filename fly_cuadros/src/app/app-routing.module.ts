import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
