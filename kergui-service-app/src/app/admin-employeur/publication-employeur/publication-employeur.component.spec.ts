import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEmployeurComponent } from './publication-employeur.component';

describe('PublicationEmployeurComponent', () => {
  let component: PublicationEmployeurComponent;
  let fixture: ComponentFixture<PublicationEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationEmployeurComponent]
    });
    fixture = TestBed.createComponent(PublicationEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
