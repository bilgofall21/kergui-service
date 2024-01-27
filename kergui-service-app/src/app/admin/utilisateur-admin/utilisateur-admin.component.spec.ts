import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurAdminComponent } from './utilisateur-admin.component';

describe('UtilisateurAdminComponent', () => {
  let component: UtilisateurAdminComponent;
  let fixture: ComponentFixture<UtilisateurAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateurAdminComponent]
    });
    fixture = TestBed.createComponent(UtilisateurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
