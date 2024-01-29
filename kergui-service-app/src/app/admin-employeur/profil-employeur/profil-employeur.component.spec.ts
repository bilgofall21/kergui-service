import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEmployeurComponent } from './profil-employeur.component';

describe('ProfilEmployeurComponent', () => {
  let component: ProfilEmployeurComponent;
  let fixture: ComponentFixture<ProfilEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilEmployeurComponent]
    });
    fixture = TestBed.createComponent(ProfilEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
