import { Component, OnInit } from '@angular/core';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-home-admin-employeure',
  templateUrl: './home-admin-employeure.component.html',
  styleUrls: ['./home-admin-employeure.component.css']
})
export class HomeAdminEmployeureComponent implements OnInit {
  dataProfession: any ;
  constructor( private professionservice : ProfessionServiceService, private utulisateurservice : UtulisateurService, public publicationservice : PublicationService) { }
  ngOnInit(): void {
    this.afficherProfession();
    this.recupAllOffre();
    this.allCandidat();
    this.recupAllService();
    this.afficherPublicationByUser();
  }
 professionData : any;
afficherProfession(){
  this.professionservice.getProfession().subscribe((data)=>{
    this.professionData = data.data;
    console.log("voir profession", this.professionData);
      })
    }

    allpublication :any[]=[]
    recupAllOffre(){
      this.publicationservice.geyAllpublication().subscribe((respons)=>{
        this.allpublication = respons.data;
        console.log("eeee", this.allpublication);
        // localStorage.setItem('all_publication', JSON.stringify(this.allpublication.data))
      })
    }
    dataCandidat : any []=[];
    allCandidat(): void{
      this.utulisateurservice.getAllCandidat().subscribe((data)=>{
        this.dataCandidat = data.data;
      })
    }
    allprofession : any []= [];
    recupAllService(){
      this.professionservice.getProfession().subscribe((respons)=>{
        this.allprofession = respons.data;
        console.log('rrrrrrrr', this.allprofession);
        // localStorage.setItem('all_profession', JSON.stringify(this.allprofession.data))
      })
    }
    userConnect : any;
    dataPublication : any;
    datPublicationFiltred : any []=[]
    afficherPublicationByUser () : void{
      // rcuperation de l'user connecte depuis local storage
      const recupuserConnecte = localStorage.getItem('user_profile')
      this.userConnect = recupuserConnecte ? JSON.parse(recupuserConnecte) : null;
      if(this.userConnect){
        // appel du service recuperant tpous les annonces
        this.publicationservice.geyAllpublication().subscribe((data)=>{
          this.dataPublication = data.data;
        
          // fitrer les anonces en fontion du userconnecté
          this.datPublicationFiltred = this.dataPublication.filter((element: { user_id: any; }) => element.user_id == this.userConnect.id);
          
          console.log("mes pubiiiii", this.datPublicationFiltred);
          // this.datPublicationFiltred.forEach((publication : any)=>{
          //   const nomProfession = this.getNomProfesion(publication.profession_id);
          //   console.log("profession", nomProfession);
          // })
        })
        
      }
  
    }
  


     // Attribut pour la pagination
     articlesParPage = 4; // Nombre d'articles par page
     pageActuelle = 1; // Page actuelle
  

  // pagination
  dataprofessiontrouve : any []=[];
  searchservice : string= '';
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.dataprofessiontrouve= this.professionData.filter((service: { nom_prof: string; description: string; }) =>
    service.nom_prof.toLowerCase().includes(this.searchservice.toLowerCase()) ||
    service.description.toLowerCase().includes(this.searchservice.toLowerCase())
    );
  return this.dataprofessiontrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. professionData.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. professionData.length / this.articlesParPage);
  }

}
