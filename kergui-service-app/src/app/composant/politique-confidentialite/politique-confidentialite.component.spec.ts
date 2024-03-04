import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfidentialiteComponent } from './politique-confidentialite.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PolitiqueConfidentialiteComponent', () => {
  let component: PolitiqueConfidentialiteComponent;
  let fixture: ComponentFixture<PolitiqueConfidentialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueConfidentialiteComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(PolitiqueConfidentialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
