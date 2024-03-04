import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCandidatComponent } from './main-candidat.component';
import { HeaderCandidatComponent } from '../layout/header-candidat/header-candidat.component';
import { FooterCandidatComponent } from '../layout/footer-candidat/footer-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainCandidatComponent', () => {
  let component: MainCandidatComponent;
  let fixture: ComponentFixture<MainCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCandidatComponent, HeaderCandidatComponent, FooterCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
   
    });
    fixture = TestBed.createComponent(MainCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
