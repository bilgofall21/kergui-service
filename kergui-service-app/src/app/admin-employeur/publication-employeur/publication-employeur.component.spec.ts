import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEmployeurComponent } from './publication-employeur.component';
import { HeaderEmployeurComponent } from '../layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from '../layout/sidebar-employeur/sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicationEmployeurComponent', () => {
  let component: PublicationEmployeurComponent;
  let fixture: ComponentFixture<PublicationEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationEmployeurComponent, HeaderEmployeurComponent, SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(PublicationEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
