import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
constructor(public publicationservice : PublicationService){}
detailOffre :[]= [];
  ngOnInit(): void {
   this.afficherAllPublication();
  }
dataPublications : any;
afficherAllPublication(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.dataPublications =respons.data;
    console.log("mes publicaaa", this.dataPublications);
  })
}
voirDetail(element : any){
  this.detailOffre = element;
  console.log("lou khew" ,this.detailOffre);
  localStorage.setItem('detail_offre', JSON.stringify(this.detailOffre))

}


   // Attribut pour la pagination
   articlesParPage = 4; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle



// pagination
 datapublicationTrouve : any []=[]; 
 searchPublication : string='';
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.datapublicationTrouve = this.dataPublications.filter((publica: { description: string; created_at: string; }) => 
    publica.description.toLowerCase().includes(this.searchPublication.toLowerCase())||
    publica.created_at.toLowerCase().includes(this.searchPublication.toLowerCase())
    );
  
  return this.datapublicationTrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this.dataPublications.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.dataPublications.length / this.articlesParPage);
  }

}
