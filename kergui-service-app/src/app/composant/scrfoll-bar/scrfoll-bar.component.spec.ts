import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrfollBarComponent } from './scrfoll-bar.component';

describe('ScrfollBarComponent', () => {
  let component: ScrfollBarComponent;
  let fixture: ComponentFixture<ScrfollBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrfollBarComponent]
    });
    fixture = TestBed.createComponent(ScrfollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
