import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingCatalogComponent } from './painting-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: PaintingCatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingCatalogRoutingModule {}
