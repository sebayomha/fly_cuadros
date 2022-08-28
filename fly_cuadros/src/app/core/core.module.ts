import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module'
import { MenuComponent } from './components/menu/menu.component'

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    MaterialModule,
  ],
  exports: [MenuComponent],
  providers: [],
})
export class CoreModule { }
