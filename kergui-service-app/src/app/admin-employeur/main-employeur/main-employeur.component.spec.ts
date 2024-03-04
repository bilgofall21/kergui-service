import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmployeurComponent } from './main-employeur.component';
import { HeaderEmployeurComponent } from '../layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from '../layout/sidebar-employeur/sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainEmployeurComponent', () => {
  let component: MainEmployeurComponent;
  let fixture: ComponentFixture<MainEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainEmployeurComponent, HeaderEmployeurComponent, SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(MainEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
