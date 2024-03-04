import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrePostulerComponent } from './offre-postuler.component';
import { HeaderCandidatComponent } from '../layout/header-candidat/header-candidat.component';
import { FooterCandidatComponent } from '../layout/footer-candidat/footer-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('OffrePostulerComponent', () => {
  let component: OffrePostulerComponent;
  let fixture: ComponentFixture<OffrePostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffrePostulerComponent, HeaderCandidatComponent, FooterCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(OffrePostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
