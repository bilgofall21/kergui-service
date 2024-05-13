import { TestBed } from '@angular/core/testing';

import { SaveDetailEmployeServiceService } from './save-detail-employe-service.service';

describe('SaveDetailEmployeServiceService', () => {
  let service: SaveDetailEmployeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDetailEmployeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
