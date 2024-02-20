import { Component, OnInit } from '@angular/core';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import Swal from 'sweetalert2';

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
  constructor(private candidaterservice : CandidatureServiceService,){}

  Candididater(id : any) : void{
    this.candidaterservice.CandidaterUser(id).subscribe((respons)=>{
      this.affichermessageCandidater('success', 'bravo', ' candidature acceptée');
      console.log("candidature reussi", respons);
    },
    (error: any) => {
      this.affichermessageCandidater('error', 'desole', ' veiller vous connectez');
      console.error('candidature non valide:', error);
      // Handle registration error, e.g., show an error message
    }
    )
  }

  affichermessageCandidater(icone: any, message: string,user:string) {
    Swal.fire({
        position: 'center',
        icon: icone,
        title: message +"" +user,
        showConfirmButton: true,
        confirmButtonColor: "#3A6A7E",
        width: 420,
        padding: 15,
        color : '#ffff',
        background: '#3A6A7E',
        // timer: 1500
    })
  }
  

}


// const userProfileData = localStorage.getItem('user_profile');
// this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;