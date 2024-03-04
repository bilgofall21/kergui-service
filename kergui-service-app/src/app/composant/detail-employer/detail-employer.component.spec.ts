import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmployerComponent } from './detail-employer.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('DetailEmployerComponent', () => {
  let component: DetailEmployerComponent;
  let fixture: ComponentFixture<DetailEmployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEmployerComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(DetailEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
