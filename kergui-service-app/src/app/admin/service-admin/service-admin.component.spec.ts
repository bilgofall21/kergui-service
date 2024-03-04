import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminComponent } from './service-admin.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ServiceAdminComponent', () => {
  let component: ServiceAdminComponent;
  let fixture: ComponentFixture<ServiceAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAdminComponent, HeaderComponent, SidebarComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ServiceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
