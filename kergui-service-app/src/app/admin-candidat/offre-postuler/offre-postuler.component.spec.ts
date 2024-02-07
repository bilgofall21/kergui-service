import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrePostulerComponent } from './offre-postuler.component';

describe('OffrePostulerComponent', () => {
  let component: OffrePostulerComponent;
  let fixture: ComponentFixture<OffrePostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffrePostulerComponent]
    });
    fixture = TestBed.createComponent(OffrePostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
