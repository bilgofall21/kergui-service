import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-employeur',
  templateUrl: './header-employeur.component.html',
  styleUrls: ['./header-employeur.component.css']
})
export class HeaderEmployeurComponent {
constructor(public authservice: AuthService, private router : Router){}
buttonConnexion : any =true;
LogOutUser() : void{
  this.authservice.deconnexion().subscribe((respons)=>{

    console.log("byyy byyyy", respons);
    localStorage.removeItem('access_token');
    // redirection vers page connexion
    this.router.navigate(['/accueil']);
    return new Observable<any>();
  })
}
}
