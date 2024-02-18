import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-candidat',
  templateUrl: './header-candidat.component.html',
  styleUrls: ['./header-candidat.component.css']
})
export class HeaderCandidatComponent implements OnInit {
  userProfile: any;
  
constructor(private router: Router, private authservice  : AuthService){}

  ngOnInit(): void {
    const userProfileString = localStorage.getItem('user_profile');
    this.userProfile = userProfileString ? JSON.parse(userProfileString) : null;
    console.log("fffffff", this.userProfile);
  }
  utilisateurConnecte: boolean =false;
LogOutUser() : void{
  this.authservice.deconnexion().subscribe((respons)=>{

    this.utilisateurConnecte = false;
    console.log("byyy byyyy", respons);
    localStorage.removeItem('access_Token');
  localStorage.removeItem('user_profile');
  localStorage.removeItem('dashboard_type')
    // redirection vers page connexion
    this.authservice.setLoggedIn(false);
    this.router.navigate(['/login']);
    return new Observable<any>();
  })
}


}
