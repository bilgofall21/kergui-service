import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userProfile: any;
constructor(public authservice: AuthService, private router: Router){}
  ngOnInit(): void {
    const userProfileData = localStorage.getItem('user_profile');
    this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;
    console.log("fffffff", this.userProfile)
  }

  LogOutUser() : void{
    this.authservice.deconnexion().subscribe((respons)=>{
  
      console.log("byyy byyyy", respons);
      localStorage.removeItem('access_token');
      // console.log("eeeeeeeee", 'access_token');
      // redirection vers page connexion
    
      this.router.navigate(['/login']);
      return new Observable<any>();
    })
  }
}
