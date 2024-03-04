import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOffreComponent } from './detail-offre.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailOffreComponent', () => {
  let component: DetailOffreComponent;
  let fixture: ComponentFixture<DetailOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOffreComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(DetailOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
