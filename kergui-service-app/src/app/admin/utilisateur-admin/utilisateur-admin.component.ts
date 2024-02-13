import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

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
   // Attribut pour la pagination
   articlesParPage = 8; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle

// methode pour recupere tous les utulisaturs
userData : any []= [];
afficherAllUser () : void {
  this.utulisateurservice.getAllUser().subscribe((repons)=>{
this.userData = repons.data;
console.log("voir les utilisateurs", this.userData);
  })
}

// methode voir detail utulisateu
 utulisateurSelectionner :  any;

afficherDeatailUser(element : any){
  this.utulisateurSelectionner = element;
}

// amethode desavtiver utulisateur

desactiverUser(id : string): void {

  Swal.fire({
    title: "Voulez vous vraiment Desactiver cet utulisateur?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#FF9A00",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui desactiver!"
  }).then((result) => {
    if(result.isConfirmed){
      this.utulisateurservice.archiverUser(id).subscribe((repons)=>{
        console.log("desactiver compte user", repons);
         // Mettez à jour l'interface en recherchant l'utilisateur dans la liste
         const utilisateurDesactive = this.userData.find((element) => element.id === id);
         if (utilisateurDesactive) {
           utilisateurDesactive.statut = 'deactive';
         }
  
        Swal.fire({
          title: "Utulisateur desactiver!",
          text: "Cet utulisateur a été desactivé .",
          icon: "success"
          });
      })

    }

  }
  )
}

// pagination
  utulisateurTrouve : any []=[];
  searchUtulisateur : string = "";
getArticlesPage(): any[] {
  const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.utulisateurTrouve = this.userData.filter((element :{prenom : string; nom : string})=>
  element.prenom.toLowerCase().includes(this.searchUtulisateur.toLowerCase()) ||
  element.nom.toLowerCase().includes(this.searchUtulisateur.toLowerCase()) 

  );
  return this.utulisateurTrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. userData.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. userData.length / this.articlesParPage);
  }






}
