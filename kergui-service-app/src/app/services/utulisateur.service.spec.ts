import { TestBed } from '@angular/core/testing';

import { UtulisateurService } from './utulisateur.service';

describe('UtulisateurService', () => {
  let service: UtulisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtulisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
