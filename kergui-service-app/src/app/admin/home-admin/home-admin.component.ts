import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/publication';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  dataHomeService: any;
constructor(private utulisateurservice : UtulisateurService, public professionservice : ProfessionServiceService, public publicationservice : PublicationService ){}
  ngOnInit(): void {
    this.recupAllutulisateur();
    this.recupAlluser = localStorage.getItem('all_user')
    this.allUseData = this.recupAlluser ? JSON.parse(this.recupAlluser) : null;
    // console.log("dataanow", this.allUseData);
    console.log("yyyyyy", this.allUseData);

    this.recupAllService();
    this.recupAllCandidat()

    this.tailleEmployeur = this.nombreEmployeur();
    
  
    this.afficheService();
    this.recupAllOffre();
  }
alldata : any;
recupAlluser : any;
allUseData : any;
tailleEmployeur : any ;
tailletCandidat : any;
recupAllutulisateur(){
  this.utulisateurservice.getAllUser().subscribe((data)=>{
    this.alldata = data;
   localStorage.setItem('all_user', JSON.stringify(this.alldata.data))
  })
}
allprofession : []= []

tailleProfession : any ;

recupAllService(){
  this.professionservice.getProfession().subscribe((respons)=>{
    this.allprofession = respons.data;
    console.log('rrrrrrrr', this.allprofession);
    // localStorage.setItem('all_profession', JSON.stringify(this.allprofession.data))
  })
}
allpublication : any [] = [];

taillePublication : any;
recupAllOffre(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.allpublication = respons.data;
    console.log("eeee", this.allpublication);
    // localStorage.setItem('all_publication', JSON.stringify(this.allpublication.data))
  })
}
allCandidat : []=[]
recupAllCandidat(){
  this.utulisateurservice.getAllCandidat().subscribe((data)=>{
    this.allCandidat = data.data;
  })
}
nombreEmployeur() {
  let employeurtaille = 0;
  for (let i = 0; i < this.allUseData.length; i++){
    if (this.allUseData[i].role == "employeur") {
      employeurtaille ++;
    }
  }
  return employeurtaille;
}
// nombreCandidat() {
//   let candidattaille = 0;
//   for (let i = 0; i < this.allUseData.length; i++){
//     if (this.allUseData[i].role == "candidat") {
//       candidattaille ++;
//     }
//   }
//   return candidattaille;
// }
// nombreService(){
//   let servicetaille = 0;
//   for (let i = 0; i < this.allProfessionData.length; i++) {
//    servicetaille ++;
    
//   }
//   return servicetaille;
// }
// nombrePublication(){
//   let publicationtaille = 0;
//   for (let i = 0; i < this.allPublicationData.length; i++) {
//     publicationtaille ++;
//     console.log("taille bi", publicationtaille);
//   }
//   return publicationtaille;
// }
lastname : any;
lastThreeProfession: any[] = [];
afficheService() : void {
  this.professionservice.getProfession().subscribe((homepublic)=>{
    this.dataHomeService = homepublic.data;
    console.log(  "les profession",this.dataHomeService);
    
    // virifier si les donnee sont null
    if (this.dataHomeService ){

       // Trier les profession par date de création dans l'ordre décroissant
       const sortedProfession = this.dataHomeService.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières profession
      this.lastThreeProfession = sortedProfession.slice(0, 4);
      console.log("blemmmm", this.lastThreeProfession);
      console.warn( this.lastThreeProfession);
      
  
    
    }
  })
}







}
