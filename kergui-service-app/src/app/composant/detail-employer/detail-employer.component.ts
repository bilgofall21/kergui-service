import { Component, OnDestroy, OnInit } from '@angular/core';
import { error } from 'jquery';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { DetalProfilServiceService } from 'src/app/services/detal-profil-service.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { TemoignageServiceService } from 'src/app/services/temoignage-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.css']
})
export class DetailEmployerComponent implements OnInit  {

    constructor( public temoignageservice : TemoignageServiceService, private candidaturservice : CandidatureServiceService, private detailprofilservice : DetalProfilServiceService){}
    dataDetailProfil : any;
    // subscription ! : Subscription
  ngOnInit(): void {
  const recupDataProfil = localStorage.getItem('data_profil') ;
  this.dataDetailProfil = recupDataProfil ? JSON.parse(recupDataProfil) : null;
  console.log("dtail profil", this.dataDetailProfil);
  this.allTemognage();
  this.temoignageForEmploye();
  this.recupCandidatureByUser();
  this.inconu();
  // this.ShowDetailProfil();

  }

  // ShowDetailProfil(): void{
  // this.subscription = this.detailprofilservice.userProfilData$.subscribe(dataDetail=>{
  //   this.dataDetailProfil = dataDetail;
  //   console.log("nouveau detail profil", this.dataDetailProfil);
  // })
  // }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  idcomment : any
  elementdetailselected : any;
  showElement (element : any) : void{
    this.elementdetailselected = element;
    this.idcomment = this.elementdetailselected.id;
    console.log('virlllllllllll', this.idcomment);
  }
  

  appreciation : string ="";
  temoinnew :  any;
ajouterTemoignage(id:any) : void{
this.temoinnew = {
  appreciation : this.appreciation,
}
this.temoignageservice.addTemoignage(id, this.temoinnew).subscribe((respons)=>{
  this.affichermessagetemoignage('success', 'Bravo ', ' temoignage ajouté')
  // console.log("test", this.temoinnew);
  // console.log("voir avis", respons);
},
(error : any)=>{
  this.affichermessagetemoignage('error', 'desole', ' veillez vous connectez')
  // console.error('temoignage non ajoute', error);
  
}
)
}

affichermessagetemoignage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      // showConfirmButton: true,
      showConfirmButton: false,
      timer: 1500,
      width: 480,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E',
      // timer: 1500
  })
   
}
dataEmployeTemoignage : any;
trueTemoignage :  any;
 temoignageForEmploye(): void{
  this.temoignageservice.temoignageemploye().subscribe((respons)=>{
    this.dataEmployeTemoignage=respons;
    for (let i = 0; i < this.dataEmployeTemoignage.length; i++) {
      this.trueTemoignage  = this.dataEmployeTemoignage[i]
      // console.log("eeeeeeeee", this.trueTemoignage );
    }
    // console.log("mes hhhhhhhhh temoignage", this.dataEmployeTemoignage);
  })
 }   

 allTemognage(){
  this.temoignageservice.getAlltemoignage().subscribe((Response)=>{
    // console.log("voir tous les tmoignage", Response);
  })
 }
 inconu(): void{
  this.temoignageservice.temoignageinconue(this.idcomment).subscribe((respons)=>{
    console.log("idddd", this.idcomment);
    console.log("inconnueee", respons);
  })
 }
 candidatures: any[] = []
 recupCandidatureByUser() {
  this.candidaturservice.listeOffreByCandidat(User).subscribe((data)=>{
    this.candidatures = data.data;
    // console.log("ssssss", this.candidatures);
  })
}
allCandidat(): void{
  
}

}
