import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminEmployeureComponent } from './home-admin-employeure.component';

describe('HomeAdminEmployeureComponent', () => {
  let component: HomeAdminEmployeureComponent;
  let fixture: ComponentFixture<HomeAdminEmployeureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminEmployeureComponent]
    });
    fixture = TestBed.createComponent(HomeAdminEmployeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
