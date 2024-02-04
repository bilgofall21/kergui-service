import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public authservice: AuthService, private router: Router){}

  LogOutUser() : void{
    this.authservice.deconnexion().subscribe((respons)=>{
  
      console.log("byyy byyyy", respons);
      localStorage.removeItem('access_token');
      // redirection vers page connexion
    
      this.router.navigate(['/login']);
      return new Observable<any>();
    })
  }
}
