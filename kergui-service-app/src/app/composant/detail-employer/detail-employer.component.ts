import { Component, OnInit } from '@angular/core';
import { TemoignageServiceService } from 'src/app/services/temoignage-service.service';

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
  console.log("test", this.temoinnew);
  console.log("voir avis", respons);
})
}
   
}
