import { NgModule } from '@angular/core';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    ImageCardComponent
  ],
  imports:[MaterialModule],
  exports:[ ImageCardComponent ],
  providers: [],
})
export class SharedModule { }
