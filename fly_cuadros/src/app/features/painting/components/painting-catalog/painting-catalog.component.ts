import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EVENT_RESULT } from 'src/app/core/constants';
import { Box } from 'src/app/features/dashboard/models/dashboard.model';
import { PurchaseComponent } from 'src/app/shared/components/purchase/purchase.component';
import { PurchaseOutput } from 'src/app/shared/components/purchase/purchase.model';
import { Painting } from './models/painting.model';
import { PaintingServiceService } from './services/painting-service.service';

@Component({
  selector: 'app-painting-catalog',
  templateUrl: './painting-catalog.component.html',
  styleUrls: ['./painting-catalog.component.scss']
})
export class PaintingCatalogComponent implements OnInit, OnDestroy {
  public paintingCode!: string;
  public paintings$!: Observable<Painting[]>
  public boxDetail$!: Observable<Box | undefined>

  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private readonly activatedRoute: ActivatedRoute, 
    private readonly bottomSheet: MatBottomSheet,
    private readonly paintingService: PaintingServiceService
    ) { 
    this.paintingCode = activatedRoute.snapshot.paramMap.get('code') as string;
  }

  public ngOnInit(): void {
    this.getPaintings();
    this.getBoxDetail();
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

  private getPaintings(): void {
    this.paintings$ = this.paintingService.getPaintings(this.paintingCode);
  }

  private getBoxDetail(): void {
    this.boxDetail$ = this.paintingService.getBoxDetail(this.paintingCode);
  }

}
