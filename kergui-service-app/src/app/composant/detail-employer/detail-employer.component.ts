import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { TemoignageServiceService } from 'src/app/services/temoignage-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.css']
})
export class DetailEmployerComponent implements OnInit {
    constructor( public temoignageservice : TemoignageServiceService){}
    dataDetailProfil : any;
  ngOnInit(): void {
  const recupDataProfil = localStorage.getItem('data_profil') ;
  this.dataDetailProfil = recupDataProfil ? JSON.parse(recupDataProfil) : null;
  console.log("dtail profil", this.dataDetailProfil);

  }
  elementdetailselected : any;
  showElement (element : any) : void{
    this.elementdetailselected = element;
  }

  appreciation : string ="";
  temoinnew :  any;
ajouterTemoignage() : void{
this.temoinnew = {
  appreciation : this.appreciation,
}
this.temoignageservice.addTemoignage(this.temoinnew).subscribe((respons)=>{
  this.affichermessagetemoignage('success', 'bravo', 'temoignage ajouté')
  console.log("test", this.temoinnew);
  console.log("voir avis", respons);
},
(error : any)=>{
  this.affichermessagetemoignage('error', 'desole', ' veillez vous connectez')
  console.error('temoignage non ajoute', error);
  
}
)
}

affichermessagetemoignage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: true,
      // timer: 1500
  })
   
}
}
