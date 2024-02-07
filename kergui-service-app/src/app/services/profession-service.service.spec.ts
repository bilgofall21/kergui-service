import { TestBed } from '@angular/core/testing';

import { ProfessionServiceService } from './profession-service.service';

describe('ProfessionServiceService', () => {
  let service: ProfessionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
