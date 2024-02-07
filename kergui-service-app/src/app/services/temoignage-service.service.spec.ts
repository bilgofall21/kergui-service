import { TestBed } from '@angular/core/testing';

import { TemoignageServiceService } from './temoignage-service.service';

describe('TemoignageServiceService', () => {
  let service: TemoignageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoignageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
