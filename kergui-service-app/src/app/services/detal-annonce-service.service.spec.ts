import { TestBed } from '@angular/core/testing';

import { DetalAnnonceServiceService } from './detal-annonce-service.service';

describe('DetalAnnonceServiceService', () => {
  let service: DetalAnnonceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalAnnonceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
