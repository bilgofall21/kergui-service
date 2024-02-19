import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-employeur',
  templateUrl: './sidebar-employeur.component.html',
  styleUrls: ['./sidebar-employeur.component.css']
})
export class SidebarEmployeurComponent {
constructor(private router: Router){}

isActive(route: string): boolean {
  return this.router.url === route;
}

}
