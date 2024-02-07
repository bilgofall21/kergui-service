import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmployeurComponent } from './main-employeur.component';

describe('MainEmployeurComponent', () => {
  let component: MainEmployeurComponent;
  let fixture: ComponentFixture<MainEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainEmployeurComponent]
    });
    fixture = TestBed.createComponent(MainEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
