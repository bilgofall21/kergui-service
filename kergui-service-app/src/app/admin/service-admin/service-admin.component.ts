import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent implements OnInit {

  constructor(private professionService : ProfessionServiceService){}
  ngOnInit(): void {
   this.recupAllProfession();
  }

  
//  variables pour methodes
 dataProfession : any;
    // objet profession
      professions : [] = [];
      newProfession : any ;
      nom_prof :string = "";
      description :string = "";
      created_at :string = "";
      updated_at :string = ""; 


  
   
 // methode pour recuperer profession depuis api
 recupAllProfession():  void{
   this.professionService.getProfession().subscribe(data =>{
     this.dataProfession = data;
     console.log("all profession",this.dataProfession);
   })
 }

//  methode pour ajouter profession


ajouterPofession (): void{
  this.newProfession={
    nom_prof:this.nom_prof,
    description:this.description,
    updated_at:this.created_at,
    created_at:this.updated_at
  };
  this.professionService.addProfession(this.newProfession).subscribe((dataprof : any) =>{
    console.log("ajout", dataprof);
    window.location.reload();
  },
  error =>{
    console.error('Erreur lors de l\'ajout :', error);
  }
  )
}



}
