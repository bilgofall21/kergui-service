import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEmployeurComponent } from './sidebar-employeur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarEmployeurComponent', () => {
  let component: SidebarEmployeurComponent;
  let fixture: ComponentFixture<SidebarEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarEmployeurComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(SidebarEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
