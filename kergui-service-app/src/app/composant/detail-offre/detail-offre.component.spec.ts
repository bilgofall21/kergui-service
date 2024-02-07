import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOffreComponent } from './detail-offre.component';

describe('DetailOffreComponent', () => {
  let component: DetailOffreComponent;
  let fixture: ComponentFixture<DetailOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOffreComponent]
    });
    fixture = TestBed.createComponent(DetailOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
