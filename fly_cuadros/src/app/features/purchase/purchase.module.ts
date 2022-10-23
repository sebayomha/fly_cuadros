import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { PurchaseRoutingModule } from './purchase-routing.module';

@NgModule({
  declarations: [
  ],
  exports:[],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
})
export class PurchaseModule { }
