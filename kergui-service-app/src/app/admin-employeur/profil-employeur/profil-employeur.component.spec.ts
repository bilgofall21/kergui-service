import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEmployeurComponent } from './profil-employeur.component';
import { HeaderEmployeurComponent } from '../layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from '../layout/sidebar-employeur/sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfilEmployeurComponent', () => {
  let component: ProfilEmployeurComponent;
  let fixture: ComponentFixture<ProfilEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilEmployeurComponent, HeaderEmployeurComponent, SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ProfilEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
