import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PaintingCatalogComponent } from './painting-catalog.component';
import { PaintingCatalogRoutingModule } from './painting-catalog-routing.module';


@NgModule({
  declarations: [
    PaintingCatalogComponent
  ],
  exports:[],
  imports: [
    CommonModule,
    PaintingCatalogRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class PaintingCatalogModule { }
