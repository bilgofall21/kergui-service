import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {
  // listeEmployes! : any;
     // Attribut pour la pagination
     articlesParPage = 4; // Nombre d'articles par page
     pageActuelle = 1; // Page actuelle
  userprofData: any;

     
  constructor(private utilisateurservice : UtulisateurService ,  private professionservice : ProfessionServiceService, private activatedRoute: ActivatedRoute ) { }


  recupDataUser : any;
  userDataByProfession : any; 
  ngOnInit(): void {
//  this.afficherutilisteur();

  this.professionservice.GetUserByProfession(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
    this.userprofData =data.data;
    console.log("voir mes user specifique", this.userprofData);
    localStorage.setItem('uer_byprof', JSON.stringify(this.userprofData))
  })



  }
   // declaration tableau employe
  

  dataUers : any;
chargementdonne ():  void{
  this.recupDataUser = localStorage.getItem('uer_byprof');
  this.userprofData = this.recupDataUser ? JSON.parse(this.recupDataUser) : null
  console.log("nos utulisaturs", this.userprofData);
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
searchElement: string = '';
  userproftrouve : any []=[];
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    this.userproftrouve = this.userprofData.filter((element: { prenom: string; nom: string; }) =>
      element.prenom.toLowerCase().includes(this.searchElement.toLowerCase()) ||
      element.nom.toLowerCase().includes(this.searchElement.toLowerCase())
      );
    return this.userproftrouve.slice(indexDebut, indexFin);
  }
     // Méthode pour générer la liste des pages
     get pages(): number[] {
      const totalPages = Math.ceil(this.userprofData.length / this.articlesParPage);
      return Array(totalPages).fill(0).map((_, index) => index + 1);
    }
  
    // Méthode pour obtenir le nombre total de pages
    get totalPages(): number {
      return Math.ceil(this.userprofData.length / this.articlesParPage);
    }
 
}
