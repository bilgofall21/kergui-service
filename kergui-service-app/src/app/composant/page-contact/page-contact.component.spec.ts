import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactComponent } from './page-contact.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageContactComponent', () => {
  let component: PageContactComponent;
  let fixture: ComponentFixture<PageContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContactComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(PageContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
