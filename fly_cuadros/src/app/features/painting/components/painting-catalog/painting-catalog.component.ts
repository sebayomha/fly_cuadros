import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EVENT_RESULT } from 'src/app/core/constants';
import { PurchaseComponent } from 'src/app/shared/components/purchase/purchase.component';
import { PurchaseOutput } from 'src/app/shared/components/purchase/purchase.model';

@Component({
  selector: 'app-painting-catalog',
  templateUrl: './painting-catalog.component.html',
  styleUrls: ['./painting-catalog.component.scss']
})
export class PaintingCatalogComponent implements OnInit, OnDestroy {
  public paintingCode!: string | null;

  private readonly onDestroy$ = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly bottomSheet: MatBottomSheet) { 
    this.paintingCode = activatedRoute.snapshot.paramMap.get('code')
  }

  ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public openReservationConfirmation(): void {
    this.bottomSheet.open(PurchaseComponent).afterDismissed()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe((result: PurchaseOutput) => {
      if(result && result.event === EVENT_RESULT.CONFIRM) {
        alert("CONFIRMACION:: ABRIR POPUP DE EXITO",)
      }
    })
  }

  public onTeamChanges($event: any): void {
    console.log($event)
  }

}
