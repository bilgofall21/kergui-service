import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAdminComponent } from './profil-admin.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfilAdminComponent', () => {
  let component: ProfilAdminComponent;
  let fixture: ComponentFixture<ProfilAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilAdminComponent, HeaderComponent, SidebarComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
  
    });
    fixture = TestBed.createComponent(ProfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
