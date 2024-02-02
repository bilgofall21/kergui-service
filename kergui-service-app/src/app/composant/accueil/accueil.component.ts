import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
constructor( private publicationservice : PublicationService) {}
  ngOnInit(): void {
this.affichepublication();
  }

  // methode pour afficher 3 dernier publications au niveau de l'accueil
dataHomepublication : any;
affichepublication() : void {
  this.publicationservice.geyAllpublication().subscribe((homepublic)=>{
    this.dataHomepublication = homepublic;
    console.log(  "les publications",this.dataHomepublication);

    // virifier si les donnee sont null
    if (this.dataHomepublication && this.dataHomepublication.data){
       // Trier les publications par date de création dans l'ordre décroissant
       const sortedPublications = this.dataHomepublication.data.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières publications
      const lastThreePublications = sortedPublications.slice(0, 3);
      console.log('vor dernietr', lastThreePublications);
    }
  })
}

}
