import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageComponent } from './temoignage.component';
import { HeaderCandidatComponent } from '../layout/header-candidat/header-candidat.component';
import { FooterCandidatComponent } from '../layout/footer-candidat/footer-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('TemoignageComponent', () => {
  let component: TemoignageComponent;
  let fixture: ComponentFixture<TemoignageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemoignageComponent, HeaderCandidatComponent, FooterCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(TemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
