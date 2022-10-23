import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { DetailPurchaseComponent } from './detail-purchase.component';
import { DetailPurchaseRoutingModule } from './detail-purchase-routing.module';

@NgModule({
  declarations: [
    DetailPurchaseComponent
  ],
  exports:[],
  imports: [
    CommonModule,
    DetailPurchaseRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
})
export class DetailPurchaseModule { }
