import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServiceComponent } from './detail-service.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailServiceComponent', () => {
  let component: DetailServiceComponent;
  let fixture: ComponentFixture<DetailServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailServiceComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(DetailServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
