import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmployeurComponent } from './header-employeur.component';

describe('HeaderEmployeurComponent', () => {
  let component: HeaderEmployeurComponent;
  let fixture: ComponentFixture<HeaderEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEmployeurComponent]
    });
    fixture = TestBed.createComponent(HeaderEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
