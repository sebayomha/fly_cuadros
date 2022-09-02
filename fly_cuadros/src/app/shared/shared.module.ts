import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    ImageCardComponent,
    PurchaseComponent
  ],
  imports:[ MaterialModule, FormsModule, ReactiveFormsModule, CommonModule, NgxImageZoomModule ],
  exports:[ ImageCardComponent, PurchaseComponent ],
  providers: [],
})
export class SharedModule { }
