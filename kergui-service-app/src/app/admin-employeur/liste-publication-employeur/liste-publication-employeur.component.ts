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

  // Attribut pour la pagination
  articlesParPage = 10; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle

  // pagination
  utulisateurTrouve : any []=[];
  searchUtulisateur : string = "";
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.utulisateurTrouve = this.dataTemoignage.filter((element :{prenom : string; appreciation : string})=>
  element.prenom.toLowerCase().includes(this.searchUtulisateur.toLowerCase()) ||
  element.appreciation.toLowerCase().includes(this.searchUtulisateur.toLowerCase()) 

  );
  return this.utulisateurTrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. dataTemoignage.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. dataTemoignage.length / this.articlesParPage);
  }
}


 
