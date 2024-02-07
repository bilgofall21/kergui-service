import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCandidatComponent } from './footer-candidat.component';

describe('FooterCandidatComponent', () => {
  let component: FooterCandidatComponent;
  let fixture: ComponentFixture<FooterCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterCandidatComponent]
    });
    fixture = TestBed.createComponent(FooterCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
