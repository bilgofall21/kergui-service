import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurAdminComponent } from './utilisateur-admin.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UtilisateurAdminComponent', () => {
  let component: UtilisateurAdminComponent;
  let fixture: ComponentFixture<UtilisateurAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateurAdminComponent, HeaderComponent, SidebarComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(UtilisateurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
