import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatRippleModule } from '@angular/material/core';
@NgModule({
  declarations: [
  ],
  exports:[ MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatRippleModule ],
  providers: [],
})
export class MaterialModule { }
