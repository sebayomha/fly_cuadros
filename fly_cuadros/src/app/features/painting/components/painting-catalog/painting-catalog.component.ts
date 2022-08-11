import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-painting-catalog',
  templateUrl: './painting-catalog.component.html',
  styleUrls: ['./painting-catalog.component.scss']
})
export class PaintingCatalogComponent implements OnInit {
  public paintingCode!: string | null;

  constructor(private readonly activatedRoute: ActivatedRoute) { 
    this.paintingCode = activatedRoute.snapshot.paramMap.get('code')
  }

  ngOnInit(): void {
  }

}
