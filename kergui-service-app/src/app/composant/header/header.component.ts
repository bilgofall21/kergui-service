import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loginButton: TemplateRef<NgIfContext<boolean>> | null | undefined;
  userProfile: any;
  constructor(private authservice : AuthService){}
  ngOnInit(): void {
    // const userProfileData = localStorage.getItem('user_profile');
    // this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;
    // console.log("fffffff", this.userProfile)
  }




}
