import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatSelectChange } from '@angular/material/select';
import { EVENT_RESULT } from 'src/app/core/constants';
import { Measure } from 'src/app/core/models/measures.model';
import { Painting } from 'src/app/features/painting/components/painting-catalog/models/painting.model';
import { PurchaseOutput } from './purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {

  public measures!: Measure[];
  public painting!: Painting;
  public readonly purchaseForm = this.formBuilder.group({
    measure: [null, Validators.required],
    price: null,
  })

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Painting,
    private readonly _bottomSheetRef: MatBottomSheetRef<PurchaseComponent, PurchaseOutput>, 
    private readonly formBuilder: FormBuilder
    ) {
      this.painting = data;
      this.measures = data.medidas
    }


  public measureChange({value}: MatSelectChange): void {
    this.purchaseForm.get('price')!.patchValue(value.precio)
  }

  public confirm(): void {
    this._bottomSheetRef.dismiss({
      event: EVENT_RESULT.CONFIRM,
      data: {...this.purchaseForm, painting: this.painting}
    });
  }

}
