import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAdminComponent } from './publication-admin.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicationAdminComponent', () => {
  let component: PublicationAdminComponent;
  let fixture: ComponentFixture<PublicationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationAdminComponent, HeaderComponent, SidebarComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    
    });
    fixture = TestBed.createComponent(PublicationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
