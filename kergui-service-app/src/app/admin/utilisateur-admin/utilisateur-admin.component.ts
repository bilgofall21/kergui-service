import { Component, OnInit } from '@angular/core';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-utilisateur-admin',
  templateUrl: './utilisateur-admin.component.html',
  styleUrls: ['./utilisateur-admin.component.css']
})
export class UtilisateurAdminComponent implements OnInit{
constructor(private utulisateurservice : UtulisateurService){}
  ngOnInit(): void {
   this.afficherAllUser();
  }

// methode pour recupere tous les utulisaturs
userData : any []= [];
afficherAllUser () : void {
  this.utulisateurservice.getAllUser().subscribe((repons)=>{
this.userData = repons.data;
console.log("voir les utilisateurs", this.userData);
  })
}




}
