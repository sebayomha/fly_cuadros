import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EVENT_RESULT } from 'src/app/core/constants';
import { Box } from 'src/app/features/dashboard/models/dashboard.model';
import { PurchaseService } from 'src/app/shared/components/purchase/pruchase.service';
import { PurchaseComponent } from 'src/app/shared/components/purchase/purchase.component';
import { PurchaseOutput } from 'src/app/shared/components/purchase/purchase.model';
import { ResultComponent } from 'src/app/shared/components/result/result.component';
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
    private readonly paintingService: PaintingServiceService,
    private readonly snackBar: MatSnackBar,
    private readonly purchaseService: PurchaseService
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

  public openReservationConfirmation(painting: Painting): void {
    this.bottomSheet.open(PurchaseComponent, {
      data: painting
    }).afterDismissed()
    .pipe(
      filter((result: PurchaseOutput) =>  result && result.event === EVENT_RESULT.CONFIRM), 
      map((result) => result.data),
      switchMap((data) => this.purchaseService.storePurchase({
        idCuadro: data.painting.id,
        idMedida: data.measure.id,
        descripcionMedida: data.measure.tamanio,
        precio: data.price,
        imagen: data.painting.imagenSeleccionada.src,
        tipoImagen: data.painting.imagenSeleccionada.titulo
      })),
      switchMap(() => this.snackBar.openFromComponent(ResultComponent, {
        data: {
          message: `Reserva confirmada! 
          Hacé click en <strong style="letter-spacing: 0.5px;"> Copiar </strong> y envialo a 
          <a target="_blank" class="link-color" href="https://www.instagram.com/flycuadros_oficial/">FlyCuadros</a>`,
          status: 'success',
          url: 'una-url-que-tengo-que-generar'
        },
        panelClass: 'custom-snackbar'
      }).afterOpened()),
     /*  tap(() => {
        let snackEl = document.body;
        this.renderer2.listen(snackEl, 'click', () => this.closeSnackbar())
      }), */
      takeUntil(this.onDestroy$)
    )
    .subscribe(() => {
      
    })
  }

  public closeSnackbar(): void {
    this.snackBar.dismiss();
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
