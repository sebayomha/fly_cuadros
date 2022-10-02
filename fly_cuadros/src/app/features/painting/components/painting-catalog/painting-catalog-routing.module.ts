import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPurchaseComponent } from '../detail-purchase/detail-purchase.component';
import { PaintingCatalogComponent } from './painting-catalog.component';

const routes: Routes = [
  {
    path: '',
    data: { animation: 'PaintingPage' },
    children: [
      {
        path: '',
        component: PaintingCatalogComponent,
      },
      {
        path: ':code',
        component: DetailPurchaseComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingCatalogRoutingModule {}
