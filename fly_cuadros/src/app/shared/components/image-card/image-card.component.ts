import { AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCarouselComponent } from 'ng-mat-carousel';
import { Subject, takeUntil } from 'rxjs';
import { Box } from 'src/app/features/dashboard/models/dashboard.model';
import { Painting } from 'src/app/features/painting/components/painting-catalog/models/painting.model';
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() public cardInfo!: Painting | Box | null;
  @Input() public showRipple = true;
  @ViewChild('thumbNailDialog') thumbNailDialog!: TemplateRef<any>;
  @ViewChild('matCarouselSlide') matCarouselSlide!: MatCarouselComponent;
  public selectedImage: any;

  private readonly onDestroy$ = new Subject<void>();

  constructor(public readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngAfterViewInit() {
    if(this.matCarouselSlide) {
      this.matCarouselSlide.changeEmitter
      .asObservable()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(index => {
        this.selectedImage = this.cardInfo?.imagenes?.[index];
        if(this.cardInfo) {
          this.cardInfo.imagenSeleccionada = this.selectedImage;
        }
      });
      this.matCarouselSlide.changeEmitter.emit(0);
    }
  }

  public openThumbnail(event: MouseEvent): void {
    if(event.target && ["MAT-ICON", "BUTTON"].includes((event.target as HTMLElement).nodeName)) return;
    this.dialog.open(this.thumbNailDialog, {
      panelClass: ['no-padding-dialog', 'width80']
    });
  }

}
