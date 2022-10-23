import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPurchaseComponent } from './detail-purchase.component';

const routes: Routes = [
  {
    path: '',
    data: { animation: 'PaintingPage' },
    component: DetailPurchaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPurchaseRoutingModule {}
