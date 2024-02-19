import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CandidatureServiceService } from 'src/app/services/candidature-service.service';

@Component({
  selector: 'app-offre-postuler',
  templateUrl: './offre-postuler.component.html',
  styleUrls: ['./offre-postuler.component.css']
})
export class OffrePostulerComponent implements OnInit{
constructor(private candidaturservice : CandidatureServiceService){}
  recupDataUser : any;
  dataCandidat : any ;
  candidatures: any[] = []; // Liste des candidatures récupérées depuis l'API
  candidaturesUserConnecte: any[] = [];
  ngOnInit(): void {
    // this.recupDataUser = localStorage.getItem('user_profile');
    // this.dataCandidat = this.recupDataUser ? JSON.parse(this.recupDataUser) : null;
    // console.log("falll" ,this.dataCandidat);
    // const userId = this.dataCandidat.id;
    // console.log("eeeee", userId)
    // this.candidaturesUserConnecte = this.candidatures.filter(candidature => candidature.id === userId);
    // console.log("mammmm" ,this.candidaturesUserConnecte);

    // this.recupCandidatureByUser();

  // methode pour filtrer

   this.recupCandidatureByUser();
  }

  recupCandidatureByUser() {
    this.candidaturservice.listeOffreByCandidat(User).subscribe((data)=>{
      this.candidatures = data.data;
      console.log("ssssss", this.candidatures);
    })
  }
}
