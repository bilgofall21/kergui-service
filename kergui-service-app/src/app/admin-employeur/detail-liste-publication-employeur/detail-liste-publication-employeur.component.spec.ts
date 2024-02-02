import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListePublicationEmployeurComponent } from './detail-liste-publication-employeur.component';

describe('DetailListePublicationEmployeurComponent', () => {
  let component: DetailListePublicationEmployeurComponent;
  let fixture: ComponentFixture<DetailListePublicationEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailListePublicationEmployeurComponent]
    });
    fixture = TestBed.createComponent(DetailListePublicationEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
