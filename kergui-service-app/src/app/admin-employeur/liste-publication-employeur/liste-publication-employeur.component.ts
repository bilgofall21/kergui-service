import { Component, OnInit } from '@angular/core';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { TemoignageServiceService } from 'src/app/services/temoignage-service.service';

@Component({
  selector: 'app-liste-publication-employeur',
  templateUrl: './liste-publication-employeur.component.html',
  styleUrls: ['./liste-publication-employeur.component.css']
})
export class ListePublicationEmployeurComponent implements OnInit  {
constructor (private temoignageservice : TemoignageServiceService){}
  ngOnInit(): void {
this.afficherTemoignage();
  }
  dataTemoignage : any ;
  afficherTemoignage():  void{
    this.temoignageservice.getAlltemoignage().subscribe((respons)=>{
      this.dataTemoignage = respons;
      console.log("wakhal",this.dataTemoignage);
    })
  }

 
}
