import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Box } from 'src/app/features/dashboard/models/dashboard.model';
import { Painting } from 'src/app/features/painting/components/painting-catalog/models/painting.model';
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() public cardInfo!: Painting | Box | null;
  @Input() public showRipple = true;
  @ViewChild('thumbNailDialog') thumbNailDialog!: TemplateRef<any>;

  constructor(public readonly dialog: MatDialog) {}


  ngOnInit(): void {
  }

  public openThumbnail(): void {
    this.dialog.open(this.thumbNailDialog, {
      panelClass: ['no-padding-dialog', 'width80']
    });
  }

}
