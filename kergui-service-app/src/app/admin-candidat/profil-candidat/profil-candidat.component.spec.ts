import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCandidatComponent } from './profil-candidat.component';
import { HeaderCandidatComponent } from '../layout/header-candidat/header-candidat.component';
import { FooterCandidatComponent } from '../layout/footer-candidat/footer-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfilCandidatComponent', () => {
  let component: ProfilCandidatComponent;
  let fixture: ComponentFixture<ProfilCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilCandidatComponent, HeaderCandidatComponent, FooterCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    
    });
    fixture = TestBed.createComponent(ProfilCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
