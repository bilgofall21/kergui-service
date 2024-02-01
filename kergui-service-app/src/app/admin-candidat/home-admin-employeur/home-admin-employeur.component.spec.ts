import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminEmployeurComponent } from './home-admin-employeur.component';

describe('HomeAdminEmployeurComponent', () => {
  let component: HomeAdminEmployeurComponent;
  let fixture: ComponentFixture<HomeAdminEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminEmployeurComponent]
    });
    fixture = TestBed.createComponent(HomeAdminEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
