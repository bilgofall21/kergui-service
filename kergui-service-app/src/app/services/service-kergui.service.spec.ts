import { TestBed } from '@angular/core/testing';

import { ServiceKerguiService } from './service-kergui.service';

describe('ServiceKerguiService', () => {
  let service: ServiceKerguiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceKerguiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
