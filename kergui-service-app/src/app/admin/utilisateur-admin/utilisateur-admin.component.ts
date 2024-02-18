import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateur-admin',
  templateUrl: './utilisateur-admin.component.html',
  styleUrls: ['./utilisateur-admin.component.css']
})
export class UtilisateurAdminComponent implements OnInit{
constructor(private utulisateurservice : UtulisateurService, private professionservice : ProfessionServiceService){}
  ngOnInit(): void {
   this.afficherAllUser();
   this.allProfession();
   this.allCandidat ();
  }
   // Attribut pour la pagination
   articlesParPage = 10; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle

// methode pour recupere tous les utulisaturs
userData : any []= [];
afficherAllUser () : void {
  this.utulisateurservice.getAllUser().subscribe((repons)=>{
this.userData = repons.data;
console.log("voir les utilisateurs", this.userData);
this.userData.forEach((element : any) =>{
  const nomProfession = this.getNomProfession(element.profession_id);
})
  })
}
dataCandidat : any []=[];
allCandidat (): void{
  this.utulisateurservice.getAllCandidat().subscribe((data)=>{
    this.dataCandidat = data.data;
    console.log("poutguihiljk", this.dataCandidat);
  })
}
dataProfession :  any
allProfession(): void{
  this.professionservice.getProfession().subscribe((data)=>{
    this.dataProfession = data.data;
    console.log("voir profession", this.dataProfession);
  })
}
getNomProfession(professionId : number): void{
  const profession = this.dataProfession.find((profession : {id : any} ) => profession.id == professionId);
  return profession ? profession.nom_prof : 'profession inconnue'
}

// methode voir detail utulisateu
 utulisateurSelectionner :  any;

afficherDeatailUser(element : any){
  this.utulisateurSelectionner = element;
}

// amethode desavtiver utulisateur

desactiverUser(id : string): void {

  Swal.fire({
    title: "Voulez vous vraiment désactiver cet utulisateur ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3A6A7E",
      cancelButtonColor: "#FF9A00",
      width: 480,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E',
      confirmButtonText: "Oui désactiver!"
  }).then((result) => {
    if(result.isConfirmed){
      this.utulisateurservice.archiverUser(id).subscribe((repons)=>{
        console.log("desactiver compte user", repons);
         // Mettez à jour l'interface en recherchant l'utilisateur dans la liste
         const utilisateurDesactive = this.userData.find((element) => element.id === id);
         if (utilisateurDesactive) {
           utilisateurDesactive.statut = 'deactive';
         }
        },
        error => {
          // console.error(`Erreur lors de la desactivation de la profession avec l'ID ${id} :`, error);
        }
        );
        Swal.fire({
          title: "Utilisateur desactiver!",
          text: "Cet utlisateur a été desactivé .",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          width: 410,
          padding: 15,
          color : '#ffff',
          background: '#3A6A7E',
          });

    }

  }
  )
}
activerUser(id : string): void {

  Swal.fire({
    title: "Voulez vous vraiment réactiver cet utulisateur ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3A6A7E",
    cancelButtonColor: "#FF9A00",
    width: 480,
    padding: 15,
    color : '#ffff',
    background: '#3A6A7E',
    confirmButtonText: "Oui réactiver!"
  }).then((result) => {
    if(result.isConfirmed){
      this.utulisateurservice.desaciverUser(id).subscribe((repons)=>{
        console.log("desactiver compte user", repons);
         // Mettez à jour l'interface en recherchant l'utilisateur dans la liste
         const utilisateurActive = this.userData.find((element) => element.id === id);
         if (utilisateurActive) {
           utilisateurActive.statut = 'activer';
         }
  
        }, error=>{

        }
        )
        Swal.fire({
          title: "Utulisateur réactiver!",
          text: "Cet utilisateur a été réactivé .",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          width: 400,
          padding: 15,
          color : '#ffff',
          background: '#3A6A7E',
          });

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
