import { Component, OnInit } from '@angular/core';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit  {
  dataDetail : any;
  ngOnInit(): void {
    const recupDetail = localStorage.getItem('detail_offre');
    this.dataDetail = recupDetail? JSON.parse(recupDetail) : null;
    console.log("uuuuu", this.dataDetail);
  }
  constructor(private candidaterservice : CandidatureServiceService){}

  Candididater(id : any) : void{
    this.candidaterservice.CandidaterUser(id).subscribe((respons)=>{
      console.log("candidature reussi", respons);
    })
  }
  

}


// const userProfileData = localStorage.getItem('user_profile');
// this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;