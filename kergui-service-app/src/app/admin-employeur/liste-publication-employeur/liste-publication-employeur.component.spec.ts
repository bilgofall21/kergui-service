import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePublicationEmployeurComponent } from './liste-publication-employeur.component';

describe('ListePublicationEmployeurComponent', () => {
  let component: ListePublicationEmployeurComponent;
  let fixture: ComponentFixture<ListePublicationEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePublicationEmployeurComponent]
    });
    fixture = TestBed.createComponent(ListePublicationEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
