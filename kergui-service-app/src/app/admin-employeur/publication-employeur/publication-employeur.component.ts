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


  userId = localStorage.getItem('userId');
  dataPublication : any;
  afficherPublication () : void{
    this.publicationservice.geyAllpublication().subscribe((data)=>{
      this.dataPublication = data;
      console.log("Tous les publication", this.dataPublication);
      // stocker les annones dans local storage
      // localStorage.setItem('annonce', JSON.stringify(data))
    })
  }

  // methode pour afficher seulement les annonce de luser connecter
  OffreByUser (): void {
    
  } 

}
