import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from 'src/app/shared/components/purchase/pruchase.service';
import { switchMap, filter, tap, shareReplay, map, } from 'rxjs/operators'
import { Observable, combineLatest } from 'rxjs';
import { PurchaseResponse } from 'src/app/shared/components/purchase/purchase.model';
import { PaintingServiceService } from 'src/app/features/painting/components/painting-catalog/services/painting-service.service';
import { Painting } from 'src/app/features/painting/components/painting-catalog/models/painting.model';


@Component({
  selector: 'app-detail-purchase',
  templateUrl: './detail-purchase.component.html',
  styleUrls: ['./detail-purchase.component.scss']
})
export class DetailPurchaseComponent implements OnInit {
  public purchase$!: Observable<PurchaseResponse | undefined>;
  public paintingDetail$!: Observable<Painting | null>;
  public viewReady$!: Observable<{purchase: PurchaseResponse | undefined, painting: Painting | null}>;
  
  constructor(
    private readonly activatedRoute: ActivatedRoute, 
    private readonly purchaseService: PurchaseService,
    private readonly paintingService: PaintingServiceService) {}

  public ngOnInit(): void {
    this.getPurchase();
    this.getPaintingDetail();
    this.setViewReady();
  }

  private setViewReady(): void {
    this.viewReady$ = combineLatest([this.purchase$, this.paintingDetail$])
    .pipe(map((response) => ({purchase: response?.[0], painting: response?.[1]})));
  }

  private getPurchase(): void {
    this.purchase$ = this.activatedRoute.params
    .pipe(
      filter(params => !!params['id']),
      switchMap((params) => this.purchaseService.getPurchase(params['id'])),
      filter(purchase => !!purchase),
      tap((purchase) => console.log(purchase)),
      shareReplay()
    )
  }

  private getPaintingDetail(): void {
    this.paintingDetail$ = this.purchase$.pipe(
      switchMap((purchase) => this.paintingService.getPaintingDetail(purchase!.idCuadro)
        .pipe(
          map((box) => {
            if(box) {
              return {...box, imagen: purchase!.imagen}
            }
            return null;
          })
        )
      ),
      tap((box) => {
        console.log("DETAIL::", box);
      })
    )
  }

}
