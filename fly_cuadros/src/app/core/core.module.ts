import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module'
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [MenuComponent, HeaderComponent],
  providers: [],
})
export class CoreModule { }
