import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnementComponent } from './fonctionnement.component';

describe('FonctionnementComponent', () => {
  let component: FonctionnementComponent;
  let fixture: ComponentFixture<FonctionnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FonctionnementComponent]
    });
    fixture = TestBed.createComponent(FonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
