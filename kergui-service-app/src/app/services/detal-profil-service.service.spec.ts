import { TestBed } from '@angular/core/testing';

import { DetalProfilServiceService } from './detal-profil-service.service';

describe('DetalProfilServiceService', () => {
  let service: DetalProfilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalProfilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
