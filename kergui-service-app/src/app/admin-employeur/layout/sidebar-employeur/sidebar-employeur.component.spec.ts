import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEmployeurComponent } from './sidebar-employeur.component';

describe('SidebarEmployeurComponent', () => {
  let component: SidebarEmployeurComponent;
  let fixture: ComponentFixture<SidebarEmployeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarEmployeurComponent]
    });
    fixture = TestBed.createComponent(SidebarEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
