import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    ImageCardComponent,
    PurchaseComponent
  ],
  imports:[ MaterialModule, FormsModule, ReactiveFormsModule, CommonModule ],
  exports:[ ImageCardComponent, PurchaseComponent ],
  providers: [],
})
export class SharedModule { }
