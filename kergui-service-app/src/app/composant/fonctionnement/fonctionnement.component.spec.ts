import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnementComponent } from './fonctionnement.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FonctionnementComponent', () => {
  let component: FonctionnementComponent;
  let fixture: ComponentFixture<FonctionnementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FonctionnementComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(FonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
