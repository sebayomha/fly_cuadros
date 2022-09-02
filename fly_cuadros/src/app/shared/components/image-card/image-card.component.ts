import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() public cardInfo: any;
  @ViewChild('thumbNailDialog') thumbNailDialog!: TemplateRef<any>;

  constructor(public readonly dialog: MatDialog) {}


  ngOnInit(): void {
  }

  openThumbnail(): void {
    this.dialog.open(this.thumbNailDialog, {
      panelClass: ['no-padding-dialog', 'width80']
    });
  }

}
