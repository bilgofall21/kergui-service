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

  loadingadmin : boolean = false;
   // Attribut pour la pagination
   articlesParPage = 4; // Nombre d'articles par page
   pageActuelle = 1; // Page actuelle

// methode pour recupere tous les utulisaturs
userData : any []= [];
employeurData: any[]=[];
afficherAllUser () : void {
  this.loadingadmin = true;
  this.utulisateurservice.getAllUser().subscribe((repons)=>{
this.userData = repons.data;
// console.log("voir les utilisateurs", this.userData);
this.employeurData = this.userData.filter((element : {role : string})=>
element.role == "employeur"
);
this.loadingadmin = false;
// console.log('data emplouer', this.employeurData);
this.userData.forEach((element : any) =>{
  const nomProfession = this.getNomProfession(element.profession_id);
})
  })
}
dataCandidat : any []=[];
allCandidat (): void{
  this.utulisateurservice.getAllCandidat().subscribe((data)=>{
    this.dataCandidat = data.data;
    // console.log("poutguihiljk", this.dataCandidat);
  })
}
dataProfession : any[] = [];
allProfession(): void{
  this.professionservice.getProfession().subscribe((data)=>{
    this.dataProfession = data.data;
    // console.log("voir profession", this.dataProfession);
  })
}
getNomProfession(professionId : number): void{
  const profession = this.dataProfession.find((profession : {id : any} ) => profession.id == professionId);
  return profession ? profession.nom_prof : 'profession inconnue'
}

// methode voir detail utulisateu
 utulisateurSelectionner :  any;
 employeurSelectionner :  any;

afficherDeatailUser(element : any){
  this.utulisateurSelectionner = element;
}
afficherDeatailEmployeur(element : any){
  this.employeurSelectionner  = element;
}

// amethode desavtiver utulisateur

desactiverUser(id : string): void {

  Swal.fire({
    title: "Voulez vous vraiment désactiver cet utilisateur ?",
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
        // console.log("desactiver compte user", repons);
         // Mettez à jour l'interface en recherchant l'utilisateur dans la liste
         const utilisateurDesactive = this.userData.find((element) => element.id === id);
         if (utilisateurDesactive) {
           utilisateurDesactive.statut = 'deactive';
         }
         this.afficherAllUser();
         this.allCandidat ();
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
    title: "Voulez vous vraiment réactiver cet utilisateur ?",
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
        // console.log("desactiver compte user", repons);
         // Mettez à jour l'interface en recherchant l'utilisateur dans la liste
         const utilisateurActive = this.userData.find((element) => element.id === id);
         if (utilisateurActive) {
           utilisateurActive.statut = 'activer';
         }
         this.afficherAllUser();
         this.allCandidat ();

        }, error=>{

        }
        )
        Swal.fire({
          title: "Utilisateur réactiver!",
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
  this.utulisateurTrouve = this.dataCandidat.filter((element :{prenom : string; nom : string})=>
  element.prenom.toLowerCase().includes(this.searchUtulisateur.toLowerCase()) ||
  element.nom.toLowerCase().includes(this.searchUtulisateur.toLowerCase())

  );
  return this.utulisateurTrouve.slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this. dataCandidat.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this. dataCandidat.length / this.articlesParPage);
  }


  // pour employeur
  // Attribut pour la pagination
  articlesEmParPage = 5; // Nombre d'articles par page
  pageEmActuelle = 1; // Page actuelle
  EmployerTrouve : any []=[];
  searchEmployeur : string = "";
getArticlesPageEmployeur(): any[] {
  const indexDebut = (this.pageEmActuelle - 1) * this.articlesEmParPage;
  const indexFin = indexDebut + this.articlesParPage;
  this.EmployerTrouve  = this.employeurData.filter((element :{prenom : string; nom : string})=>
  element.prenom.toLowerCase().includes(this. searchEmployeur.toLowerCase()) ||
  element.nom.toLowerCase().includes(this. searchEmployeur.toLowerCase())

  );
  return this.EmployerTrouve .slice(indexDebut, indexFin);
}
   // Méthode pour générer la liste des pages
   get pagesEmployeur(): number[] {
    const totalEmPages = Math.ceil(this. employeurData.length / this.articlesEmParPage);
    return Array(totalEmPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalEmPages(): number {
    return Math.ceil(this. employeurData.length / this.articlesEmParPage);
  }
}
