import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCandidatComponent } from './home-candidat.component';
import { HeaderCandidatComponent } from '../layout/header-candidat/header-candidat.component';
import { FooterCandidatComponent } from '../layout/footer-candidat/footer-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeCandidatComponent', () => {
  let component: HomeCandidatComponent;
  let fixture: ComponentFixture<HomeCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCandidatComponent, HeaderCandidatComponent, FooterCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HomeCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
