import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminEmployeureComponent } from './home-admin-employeure.component';
import { HeaderEmployeurComponent } from '../layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from '../layout/sidebar-employeur/sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeAdminEmployeureComponent', () => {
  let component: HomeAdminEmployeureComponent;
  let fixture: ComponentFixture<HomeAdminEmployeureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminEmployeureComponent, HeaderEmployeurComponent, SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HomeAdminEmployeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
