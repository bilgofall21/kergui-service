import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDashboardComponent } from './service-dashboard.component';

describe('ServiceDashboardComponent', () => {
  let component: ServiceDashboardComponent;
  let fixture: ComponentFixture<ServiceDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDashboardComponent]
    });
    fixture = TestBed.createComponent(ServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
