import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinneradminComponent } from './spinneradmin.component';

describe('SpinneradminComponent', () => {
  let component: SpinneradminComponent;
  let fixture: ComponentFixture<SpinneradminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinneradminComponent]
    });
    fixture = TestBed.createComponent(SpinneradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
