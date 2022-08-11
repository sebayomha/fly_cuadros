import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaintingRoutingModule } from './painting-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  exports:[],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    SharedModule
  ],
  providers: [],
})
export class PaintingModule { }
