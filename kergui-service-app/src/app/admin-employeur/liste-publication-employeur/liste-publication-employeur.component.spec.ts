import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePublicationEmployeurComponent } from './liste-publication-employeur.component';
import { HeaderEmployeurComponent } from '../layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from '../layout/sidebar-employeur/sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListePublicationEmployeurComponent', () => {
  let component: ListePublicationEmployeurComponent;
  let fixture: ComponentFixture<ListePublicationEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePublicationEmployeurComponent, HeaderEmployeurComponent, SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ListePublicationEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
