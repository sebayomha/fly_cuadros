import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
  ],
  exports:[ MatSelectModule, MatTreeModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatRippleModule, MatBottomSheetModule, MatListModule, MatChipsModule, MatDividerModule, MatDialogModule ],
  providers: [
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {panelClass: 'bottom-sheet-custom-container', hasBackdrop: true}}
  ],
})
export class MaterialModule { }
