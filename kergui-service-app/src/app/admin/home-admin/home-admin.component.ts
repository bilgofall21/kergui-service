import { filter } from 'rxjs';
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
  loadingCard = true;
constructor(private utulisateurservice : UtulisateurService, public professionservice : ProfessionServiceService, public publicationservice : PublicationService ){}
  ngOnInit(): void {
    this.recupAllutulisateur();


    this.recupAllService();
    this.recupAllCandidat()
    this.afficheService();
    this.recupAllOffre();
  }
alldata : any;
recupAlluser : any;
allUseData : any;
employeurData : [] = [];
tailleEmployeur : any ;
tailletCandidat : any;
recupAllutulisateur(){
  this.utulisateurservice.getAllUser().subscribe((data)=>{
    this.alldata = data.data;
    this.employeurData = this.alldata.filter((item : {role : string}) => item.role === 'employeur');
    // console.log("mpes employuer",this.employeurData)
  })
}
allprofession : []= []

tailleProfession : any ;

recupAllService(){
  this.professionservice.getProfession().subscribe((respons)=>{
    this.allprofession = respons.data;

  })
}
allpublication : any [] = [];

taillePublication : any;
recupAllOffre(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.allpublication = respons.data;
   
  })
}
allCandidat : []=[]
recupAllCandidat(){
  this.utulisateurservice.getAllCandidat().subscribe((data)=>{
    this.allCandidat = data.data;
  })
}

lastname : any;
lastThreeProfession: any[] = [];
afficheService() : void {
  this.professionservice.getProfession().subscribe((homepublic)=>{
    this.dataHomeService = homepublic.data;

    if (this.dataHomeService ){

       // Trier les profession par date de création dans l'ordre décroissant
       const sortedProfession = this.dataHomeService.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières profession
      this.lastThreeProfession = sortedProfession.slice(0, 3 );

      this.loadingCard = false;



    }
  })
}







}
