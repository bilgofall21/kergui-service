import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordAdminComponent } from './dashbord-admin.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashbordAdminComponent', () => {
  let component: DashbordAdminComponent;
  let fixture: ComponentFixture<DashbordAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordAdminComponent, HeaderComponent, FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    
    });
    fixture = TestBed.createComponent(DashbordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
