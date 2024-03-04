import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCandidatComponent } from './footer-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterCandidatComponent', () => {
  let component: FooterCandidatComponent;
  let fixture: ComponentFixture<FooterCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(FooterCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
