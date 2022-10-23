import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { animation: 'PaintingPage' },
    children: [
      { 
         path: ':id',
         loadChildren: async () =>
         (await import('./components/detail-purchase/detail-purchase.module')).DetailPurchaseModule
      }
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
