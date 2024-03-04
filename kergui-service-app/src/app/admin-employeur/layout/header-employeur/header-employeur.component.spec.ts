import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmployeurComponent } from './header-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderEmployeurComponent', () => {
  let component: HeaderEmployeurComponent;
  let fixture: ComponentFixture<HeaderEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HeaderEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
