import { TestBed } from '@angular/core/testing';

import { ChargementDonneeServiceService } from './chargement-donnee-service.service';

describe('ChargementDonneeServiceService', () => {
  let service: ChargementDonneeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargementDonneeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
