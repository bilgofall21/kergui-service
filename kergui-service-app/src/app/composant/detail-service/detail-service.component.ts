import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetalProfilServiceService } from 'src/app/services/detal-profil-service.service';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { SaveDetailEmployeServiceService } from 'src/app/services/save-detail-employe-service.service';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {
  // listeEmployes! : any;
     // Attribut pour la pagination
     articlesParPage = 4; // Nombre d'articles par page
     pageActuelle = 1; // Page actuelle
  userprofData: [] = [];


  constructor(private utilisateurservice : UtulisateurService ,  private professionservice : ProfessionServiceService, private activatedRoute: ActivatedRoute, private detailprofilservice : DetalProfilServiceService, private router :Router,private saveProfilService :SaveDetailEmployeServiceService ) { }


  recupDataUser : any;
  userDataByProfession : any;
  ngOnInit(): void {
    this.candidatprofession();
  }

  voirdetailProfil (element : any) : void {
    this.saveProfilService.chargeDetail(element);
    this.router.navigate(['/detail-employer', element.id]);
  }

  candidatprofession(): void{
    this.professionservice.GetUserByProfession(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.userprofData =data.data;
      const dataDetail = data.data;
      this.detailprofilservice.updateUserProfilData(dataDetail);
    })

  }

// pagination
searchElement: string = '';
  userproftrouve : any []=[];
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    this.userproftrouve = this.userprofData.filter((element: { prenom: string; nom: string; }) =>
      element.prenom.toLowerCase().includes(this.searchElement.toLowerCase()) ||
      element.nom.toLowerCase().includes(this.searchElement.toLowerCase())
      );
    return this.userproftrouve.slice(indexDebut, indexFin);
  }
     // Méthode pour générer la liste des pages
     get pages(): number[] {
      const totalPages = Math.ceil(this.userprofData.length / this.articlesParPage);
      return Array(totalPages).fill(0).map((_, index) => index + 1);
    }

    // Méthode pour obtenir le nombre total de pages
    get totalPages(): number {
      return Math.ceil(this.userprofData.length / this.articlesParPage);
    }

}
