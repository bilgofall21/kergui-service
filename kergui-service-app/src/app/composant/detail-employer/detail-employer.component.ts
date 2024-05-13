import { SaveDetailEmployeServiceService } from './../../services/save-detail-employe-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { DetalProfilServiceService } from 'src/app/services/detal-profil-service.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { TemoignageServiceService } from 'src/app/services/temoignage-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.css']
})
export class DetailEmployerComponent implements OnInit  {

    constructor( public temoignageservice : TemoignageServiceService, private candidaturservice : CandidatureServiceService, private detailprofilservice : DetalProfilServiceService, private activatedRoute : ActivatedRoute, private detailProfilservice : SaveDetailEmployeServiceService, private utilisateurservice : UtulisateurService){}

    // subscription ! : Subscription
  ngOnInit(): void {
    this.allCanfdidat();
  this.allTemognage();
  this.temoignageForEmploye();
  this.recupCandidatureByUser();
  this.inconu();



  }

  idcomment : any
  elementdetailselected : any;
  showElement (element : any) : void{
    this.elementdetailselected = element;
    this.idcomment = this.elementdetailselected.id;
    // console.log('virlllllllllll', this.idcomment);
  }

  dataDetailProfil : any;
  uploadDetailProfil(){
    this.detailProfilservice.currentDetail.subscribe(data =>{
      // console.log("voir real info", dataDetailProfil)
      if(data){
        this.dataDetailProfil = data;
        console.log("voir real info", this.dataDetailProfil)
      }else{
        const idProfil = this.activatedRoute.snapshot.paramMap.get('id');
        if(idProfil && this.dataCandidat){
          this.dataDetailProfil = this.dataCandidat.find((candidat : {id : any;}) => candidat.id === +idProfil);
        }
      }
    })
  }

dataCandidat : any;
  allCanfdidat(){
this.utilisateurservice.getAllCandidat().subscribe((data)=>{
this.dataCandidat = data.data;
console.log("zzzzzz", this.dataCandidat)
this.uploadDetailProfil();
})
  }

  appreciation : string ="";
  temoinnew :  any;
ajouterTemoignage(id:any) : void{
this.temoinnew = {
  appreciation : this.appreciation,
}
this.temoignageservice.addTemoignage(id, this.temoinnew).subscribe((respons)=>{
  this.affichermessagetemoignage('success', 'Bravo ', ' temoignage ajouté')

},
(error : any)=>{
  this.affichermessagetemoignage('error', 'desole', ' veillez vous connectez')

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
    }
  })
 }

 allTemognage(){
  this.temoignageservice.getAlltemoignage().subscribe((Response)=>{
  })
 }
 inconu(): void{
  this.temoignageservice.temoignageinconue(this.idcomment).subscribe((respons)=>{

  })
 }
 candidatures: any[] = []
 recupCandidatureByUser() {
  this.candidaturservice.listeOffreByCandidat(User).subscribe((data)=>{
    this.candidatures = data.data;
  })
}


}
