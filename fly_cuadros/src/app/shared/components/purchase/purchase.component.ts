import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { EVENT_RESULT } from 'src/app/core/constants';
import { PurchaseOutput } from './purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {

  public readonly purchaseForm = this.formBuilder.group({
    email: null
  })

  constructor(private readonly _bottomSheetRef: MatBottomSheetRef<PurchaseComponent, PurchaseOutput>, private readonly formBuilder: FormBuilder) {}

  public confirm(): void {
    this._bottomSheetRef.dismiss({
      event: EVENT_RESULT.CONFIRM,
      data: this.purchaseForm
    });
  }

}
