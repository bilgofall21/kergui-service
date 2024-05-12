import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinneremployeurComponent } from './spinneremployeur.component';

describe('SpinneremployeurComponent', () => {
  let component: SpinneremployeurComponent;
  let fixture: ComponentFixture<SpinneremployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinneremployeurComponent]
    });
    fixture = TestBed.createComponent(SpinneremployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
