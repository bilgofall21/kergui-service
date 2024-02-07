import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-employeur',
  templateUrl: './header-employeur.component.html',
  styleUrls: ['./header-employeur.component.css']
})
export class HeaderEmployeurComponent implements OnInit {
  userProfile: any;
constructor(public authservice: AuthService, private router : Router){}


  ngOnInit(): void {
    const userProfileString = localStorage.getItem('user_profile');
    this.userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    console.log("fffffff", this.userProfile);
  }
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
