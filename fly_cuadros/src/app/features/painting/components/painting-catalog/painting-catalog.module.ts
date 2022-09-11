import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { PaintingCatalogComponent } from './painting-catalog.component';
import { PaintingCatalogRoutingModule } from './painting-catalog-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    PaintingCatalogComponent
  ],
  exports:[],
  imports: [
    CommonModule,
    PaintingCatalogRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
})
export class PaintingCatalogModule { }
