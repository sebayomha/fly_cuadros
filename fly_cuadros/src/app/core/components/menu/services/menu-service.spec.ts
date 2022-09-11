import { TestBed } from '@angular/core/testing';

import { PaintingServiceService } from './menu-service.service';

describe('PaintingServiceService', () => {
  let service: PaintingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
