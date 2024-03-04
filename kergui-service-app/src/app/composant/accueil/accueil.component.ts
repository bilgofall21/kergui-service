import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/models/profession';
import { Publication } from 'src/app/models/publication';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { PublicationService } from 'src/app/services/publication.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  detailOffre: []=[];
  tailleEmployeur: number=0;
  // utilisateurConnecte: boolean=false;
  // variable de l'animation
  animatedProfessionCount: number = 0;
  animatedCandidatCount: number = 0;
  animatedEmployeurCount: number = 0;
  animatedPublicationCount: number = 0;

constructor( private publicationservice : PublicationService, private professionservice : ProfessionServiceService, private utilisateurservice : UtulisateurService) {}
  ngOnInit(): void {
this.affichepublication();
this.afficherservice();
// this.utilisateurConnecte = true;
// console.log('ttt eta', this.utilisateurConnecte);
    this.recupAllService();
    this.recupAllCandidat();
    this.recupAllOffre();
    this.tousutili();
    this.animateProfessionCount(this.allprofession.length, 1000);
  this.animateCandidatCount(this.allCandidat.length, 1000);
  this.animatePublicationCount(this.allpublication.length, 1000);
    this.tailleEmployeur = this.nombreEmployeur();
    this.animation();

   

  }

  // methode pour afficher 3 dernier publications au niveau de l'accueil
dataHomepublication : any;
lastThreePublications: Publication[] = [];
publicationFiltred : []=[];
affichepublication() : void {
  this.publicationservice.geyAllpublication().subscribe((homepublic)=>{
    this.dataHomepublication = homepublic;
    console.log(  "les publications",this.dataHomepublication);


    this.publicationFiltred = this.dataHomepublication.data.filter((element:{etat: string})=>
    element.etat == 'nouveau'
    )
    console.log("pblication dne", this.publicationFiltred);

    
    // virifier si les donnee sont null
    if (this.publicationFiltred){
       // Trier les publications par date de création dans l'ordre décroissant
       const sortedPublications = this.publicationFiltred.sort((a: { created_at: string | number | Date; }, b: { created_at: string | number | Date; }) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      // Prendre les trois dernières publications
      this.lastThreePublications = sortedPublications.slice(0, 4);
      console.log('vor dernietr', this.lastThreePublications);
    }
  })
}
dataHomeService : any;
lastFourService : Profession[]= [];
afficherservice(){
  this.professionservice.getProfession().subscribe((data)=>{
    this.dataHomeService = data;
    console.log("mes service home ", this.dataHomeService);
    if(this.dataHomeService && this.dataHomeService.data){
      const sortedServices = this.dataHomeService.data.sort((a : {created_at : string| number | Date;}, b : {created_at: string | number | Date;})=>{
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      this.lastFourService = sortedServices.slice(0, 4);
      console.log("4 sevice recent", this.lastFourService);

    }
  })
}
voirDetail(element : any){
  this.detailOffre = element;
  console.log("lou khew" ,this.detailOffre);
  localStorage.setItem('detail_offre', JSON.stringify(this.detailOffre))

}

// recuperr les services
allprofession :[]=[]
recupAllService(){
  this.professionservice.getProfession().subscribe((respons)=>{
    this.allprofession = respons.data;
    console.log('rrrrrrrr', this.allprofession);
    // localStorage.setItem('all_profession', JSON.stringify(this.allprofession.data))
  })
}
// recuperer all candidats
allCandidat : []=[];
recupAllCandidat(){
  this.utilisateurservice.getAllCandidat().subscribe((data)=>{
    this.allCandidat = data.data;
  })
}

// recuperer all offre
allpublication : any [] = [];

recupAllOffre(){
  this.publicationservice.geyAllpublication().subscribe((respons)=>{
    this.allpublication = respons.data;
    console.log("eeee", this.allpublication);
    console.log("hhhhhhhh", this.allpublication);
    // localStorage.setItem('all_publication', JSON.stringify(this.allpublication.data))
  })
}
// recupalluser
recupAlluser : any;
allUseData : any;
tousutili(): void{
  this.recupAlluser = localStorage.getItem('all_user')
  this.allUseData = this.recupAlluser ? JSON.parse(this.recupAlluser) : null;
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

// methode pour animer affichage chiffres
animateValue(end: number, duration: number, setValue: (val: number) => void) {
  if (end > 0) {
    const start = 0;
    const range = end - start;
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    const timer = setInterval(() => {
      const timeNow = new Date().getTime();
      const time = Math.min(1, (timeNow - startTime) / duration);
      
      setValue(Math.ceil(time * range));
      if (timeNow >= endTime) {
        clearInterval(timer);
      }
    }, 20);
  }
  }

  animateProfessionCount(end: number, duration: number) {
    this.animateValue(end, duration, (val: number) => this.animatedProfessionCount = val);
  }
  animateCandidatCount(end: number, duration: number) {
    this.animateValue(end, duration, (val: number) => this.animatedCandidatCount = val);
  }
  animateEmployeurCount(end: number, duration: number) {
    this.animateValue(end, duration, (val: number) => this.animatedEmployeurCount = val);
  }
  animatePublicationCount(end: number, duration: number) {
    this.animateValue(end, duration, (val: number) => this.animatedPublicationCount = val);
  }

// fonction d'animation de tous les elements
animation(): void {
  this.animateProfessionCount(this.allprofession.length, 1000);
  this.animateCandidatCount(this.allCandidat.length, 1000);
  this.animateEmployeurCount(this.tailleEmployeur, 1000);
  this.animatePublicationCount(this.allpublication.length, 1000);
}
}
