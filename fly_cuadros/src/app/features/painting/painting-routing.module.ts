import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':code',
        loadChildren: async () =>
          (await import('./components/painting-catalog/painting-catalog.module')).PaintingCatalogModule,
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'fsafsaf'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingRoutingModule {}
