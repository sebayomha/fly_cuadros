import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingCatalogComponent } from './detail-purchase.component';

describe('PaintingCatalogComponent', () => {
  let component: PaintingCatalogComponent;
  let fixture: ComponentFixture<PaintingCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
