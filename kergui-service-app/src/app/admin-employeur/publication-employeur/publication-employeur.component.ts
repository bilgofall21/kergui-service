import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication-employeur',
  templateUrl: './publication-employeur.component.html',
  styleUrls: ['./publication-employeur.component.css']
})
export class PublicationEmployeurComponent implements OnInit {
  constructor( private publicationservice : PublicationService) { }
  ngOnInit(): void {
   this.afficherPublication();
  }

  // variabl l'id de l'utulisateur connecte depuis le local storage
  connecterUserId = localStorage.getItem('connexionId');

  // tableau pour stocker publication filtrer
  


  dataPublication : any;
  afficherPublication () : void{
    this.publicationservice.geyAllpublication().subscribe((data)=>{
      this.dataPublication = data;
      console.log("Tous les publication", this.dataPublication);
    })
  }

}
