import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { DetalAnnonceServiceService } from 'src/app/services/detal-annonce-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { SaveDetailEmployeServiceService } from 'src/app/services/save-detail-employe-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit  {
  dataDetail : any;
  subscription!: Subscription;
  ngOnInit(): void {
   this.getAllPublication()


  }
  constructor(private candidaterservice : CandidatureServiceService, private detailAnnonceservice : DetalAnnonceServiceService, private annoceServices : PublicationService, private detailAnnonce :SaveDetailEmployeServiceService, private activatedRoute : ActivatedRoute){}
  // methode pour recupere detail annonce
showDetailAnnonce(): void{

this.detailAnnonce.currentAnnonce.subscribe((data)=>{
  if(data){
    this.dataDetail = data;
    console.log("dddddd", this.dataDetail)
  }else{
    const idAnnonce = this.activatedRoute.snapshot.paramMap.get('id');
    if(idAnnonce && this.publicationData){
      this.dataDetail = this.publicationData.find((annonce: { id: any; }) => annonce.id === +idAnnonce);
    }
  }
})
}

  // methode pour candidatr a une offre
  Candididater(id : any) : void{
    this.candidaterservice.CandidaterUser(id).subscribe((respons)=>{
      this.affichermessageCandidater('success', 'bravo', ' votre candidature a été enregistrée ');
      console.log("candidature reussi", respons);
    },
    (error: any) => {
      this.affichermessageCandidater('error', 'Désolé', ' veiller vous connectez comme employé');
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
        showConfirmButton: false,
        confirmButtonColor: "#3A6A7E",
        timer : 2500,
        width: 550,
        padding: 10,
        color : '#ffff',
        background: '#3A6A7E',
        // timer: 1500
    })
  }

publicationData :any;
  getAllPublication(): void{
    this.annoceServices.geyAllpublication().subscribe((data)=>{
      this.publicationData = data.data;
      console.log("voir tpus les annonces", this.publicationData)
      this.showDetailAnnonce();
    })
  }

}


// const userProfileData = localStorage.getItem('user_profile');
// this.userProfile = userProfileData ? JSON.parse(userProfileData) : null;
