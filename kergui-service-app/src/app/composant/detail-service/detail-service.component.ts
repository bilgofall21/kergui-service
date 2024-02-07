import { Component, OnInit } from '@angular/core';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {
  // listeEmployes! : any;
     // Attribut pour la pagination
     articlesParPage = 8; // Nombre d'articles par page
     pageActuelle = 1; // Page actuelle

     
  constructor(private utilisateurservice : UtulisateurService) { }


  recupDataUser : any;
  userDataByProfession : any; 
  ngOnInit(): void {
 this.chargementdonne();
//  this.afficherutilisteur();
  }
   // declaration tableau employe
  

  dataUers : any;
chargementdonne ():  void{
  this.recupDataUser = localStorage.getItem('uer_byprof');
  this.userDataByProfession = this.recupDataUser ? JSON.parse(this.recupDataUser) : null
  console.log("nos utulisaturs", this.userDataByProfession);
  // this.afficherutilisteur()
}
  // afficherutilisteur(): void{
  //   this.utilisateurservice.getAllCandidat().subscribe((repons)=>{
  //     this.dataUers = repons;
  //     // console.log("voir utilisateur tay",this.dataUers);
  //   })
  // }
  selectedProfil : any;

  voirdetailProfil (element : any) : void {
    this.selectedProfil = element;
    localStorage.setItem('data_profil', JSON.stringify(this.selectedProfil));
  }











// pagination
  
  // getArticlesPage(): any[] {
  //   const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  //   const indexFin = indexDebut + this.articlesParPage;
  //   return this.userDataByProfession.data.slice(indexDebut, indexFin);
  // }
  //    // Méthode pour générer la liste des pages
  //    get pages(): number[] {
  //     const totalPages = Math.ceil(this.userDataByProfession.data.length / this.articlesParPage);
  //     return Array(totalPages).fill(0).map((_, index) => index + 1);
  //   }
  
  //   // Méthode pour obtenir le nombre total de pages
  //   get totalPages(): number {
  //     return Math.ceil(this.userDataByProfession.data.length / this.articlesParPage);
  //   }
 
}
