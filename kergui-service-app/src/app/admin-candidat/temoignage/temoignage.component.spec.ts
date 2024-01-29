import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageComponent } from './temoignage.component';

describe('TemoignageComponent', () => {
  let component: TemoignageComponent;
  let fixture: ComponentFixture<TemoignageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemoignageComponent]
    });
    fixture = TestBed.createComponent(TemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
