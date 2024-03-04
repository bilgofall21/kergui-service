import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCandidatComponent } from './header-candidat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderCandidatComponent', () => {
  let component: HeaderCandidatComponent;
  let fixture: ComponentFixture<HeaderCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCandidatComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HeaderCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
