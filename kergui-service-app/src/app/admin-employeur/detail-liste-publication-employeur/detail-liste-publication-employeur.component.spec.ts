import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListePublicationEmployeurComponent } from './detail-liste-publication-employeur.component';
import { HeaderEmployeurComponent } from '../layout/header-employeur/header-employeur.component';
import { SidebarEmployeurComponent } from '../layout/sidebar-employeur/sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailListePublicationEmployeurComponent', () => {
  let component: DetailListePublicationEmployeurComponent;
  let fixture: ComponentFixture<DetailListePublicationEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailListePublicationEmployeurComponent, HeaderEmployeurComponent, SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(DetailListePublicationEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
