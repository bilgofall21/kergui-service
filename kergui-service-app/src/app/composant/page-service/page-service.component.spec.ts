import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceComponent } from './page-service.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageServiceComponent', () => {
  let component: PageServiceComponent;
  let fixture: ComponentFixture<PageServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageServiceComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(PageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
