import { Component } from '@angular/core';
import { UtulisateurService } from 'src/app/services/utulisateur.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent {
  // listeEmployes! : any;
     // Attribut pour la pagination
     articlesParPage = 8; // Nombre d'articles par page
     pageActuelle = 1; // Page actuelle

     
  constructor(private utilisateurservice : UtulisateurService) { }



  ngOnInit(): void {
    this.afficherutilisteur();
  }
   // declaration tableau employe
   listeEmployes : any []= [
    {
      id : 1,
      nom : "Fall",
      prenom : "Ami",
      email : "fall@gmail.com",
      telephone : "778315292",
      adresse : "Dakar",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "18/02/1990",
      imageUrl : "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 2,
      nom : "Diop",
      prenom : "Fatou",
      email : "diop@gmail.com",
      telephone : "778317592",
      adresse : "ouakam",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "12/01/1998",
      imageUrl : "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 3,
      nom : "Ba",
      prenom : "Aissatou",
      email : "ba@gmail.com",
      telephone : "771254798",
      adresse : "Thiaroy",
      langue: "francais",
      civilité : "Femme",
      experience: "3ans",
      profession : "femme de menage",
      dateNaissance : "02/11/2002",
      imageUrl : "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",  
    },
    {
      id : 4,
      nom : "Ndiaye",
      prenom : "Rokhaya",
      email : "ndiaye@gmail.com",
      telephone : "771458796",
      adresse : "Pikine",
      langue: "wolof",
      civilité : "Femme",
      experience: "12ans",
      profession : "femme de menage",
      dateNaissance : "25/10/1985",
      imageUrl : "https://images.unsplash.com/photo-1523825036634-aab3cce05919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison appleler moi",  
    },
    {
      id : 1,
      nom : "Fall",
      prenom : "Ami",
      email : "fall@gmail.com",
      telephone : "778315292",
      adresse : "Dakar",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "18/02/1990",
      imageUrl : "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",
    },
    {
      id : 2,
      nom : "Diop",
      prenom : "Fatou",
      email : "diop@gmail.com",
      telephone : "778317592",
      adresse : "ouakam",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "12/01/1998",
      imageUrl : "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 3,
      nom : "Ba",
      prenom : "Aissatou",
      email : "ba@gmail.com",
      telephone : "771254798",
      adresse : "Thiaroy",
      langue: "francais",
      civilité : "Femme",
      experience: "3ans",
      profession : "femme de menage",
      dateNaissance : "02/11/2002",
      imageUrl : "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",  
    },
    {
      id : 4,
      nom : "Ndiaye",
      prenom : "Rokhaya",
      email : "ndiaye@gmail.com",
      telephone : "771458796",
      adresse : "Pikine",
      langue: "wolof",
      civilité : "Femme",
      experience: "12ans",
      profession : "femme de menage",
      dateNaissance : "25/10/1985",
      imageUrl : "https://images.unsplash.com/photo-1523825036634-aab3cce05919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison appleler moi",  
    },
    {
      id : 1,
      nom : "Fall",
      prenom : "Ami",
      email : "fall@gmail.com",
      telephone : "778315292",
      adresse : "Dakar",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "18/02/1990",
      imageUrl : "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 2,
      nom : "Diop",
      prenom : "Fatou",
      email : "diop@gmail.com",
      telephone : "778317592",
      adresse : "ouakam",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "12/01/1998",
      imageUrl : "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 3,
      nom : "Ba",
      prenom : "Aissatou",
      email : "ba@gmail.com",
      telephone : "771254798",
      adresse : "Thiaroy",
      langue: "francais",
      civilité : "Femme",
      experience: "3ans",
      profession : "femme de menage",
      dateNaissance : "02/11/2002",
      imageUrl : "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",  
    },
    {
      id : 4,
      nom : "Ndiaye",
      prenom : "Rokhaya",
      email : "ndiaye@gmail.com",
      telephone : "771458796",
      adresse : "Pikine",
      langue: "wolof",
      civilité : "Femme",
      experience: "12ans",
      profession : "femme de menage",
      dateNaissance : "25/10/1985",
      imageUrl : "https://images.unsplash.com/photo-1523825036634-aab3cce05919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison appleler moi",  
    },
    {
      id : 1,
      nom : "Fall",
      prenom : "Ami",
      email : "fall@gmail.com",
      telephone : "778315292",
      adresse : "Dakar",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "18/02/1990",
      imageUrl : "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 2,
      nom : "Diop",
      prenom : "Fatou",
      email : "diop@gmail.com",
      telephone : "778317592",
      adresse : "ouakam",
      langue: "wolof",
      civilité : "Femme",
      experience: "5ans",
      profession : "femme de menage",
      dateNaissance : "12/01/1998",
      imageUrl : "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",



    },
    {
      id : 3,
      nom : "Ba",
      prenom : "Aissatou",
      email : "ba@gmail.com",
      telephone : "771254798",
      adresse : "Thiaroy",
      langue: "francais",
      civilité : "Femme",
      experience: "3ans",
      profession : "femme de menage",
      dateNaissance : "02/11/2002",
      imageUrl : "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison",  
    },
    {
      id : 4,
      nom : "Ndiaye",
      prenom : "Rokhaya",
      email : "ndiaye@gmail.com",
      telephone : "771458796",
      adresse : "Pikine",
      langue: "wolof",
      civilité : "Femme",
      experience: "12ans",
      profession : "femme de menage",
      dateNaissance : "25/10/1985",
      imageUrl : "https://images.unsplash.com/photo-1523825036634-aab3cce05919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
      description : "Je suis une femme de ménage, je suis disponible pour vous faire le service de maison appleler moi",  
    },
  ]

  dataUers : any;

  afficherutilisteur(): void{
    this.utilisateurservice.getAllCandidat().subscribe((repons)=>{
      this.dataUers = repons;
      console.log("voir utilisateur",this.dataUers);
    })
  }











// pagination
  
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.listeEmployes.slice(indexDebut, indexFin);
  }
     // Méthode pour générer la liste des pages
     get pages(): number[] {
      const totalPages = Math.ceil(this. listeEmployes.length / this.articlesParPage);
      return Array(totalPages).fill(0).map((_, index) => index + 1);
    }
  
    // Méthode pour obtenir le nombre total de pages
    get totalPages(): number {
      return Math.ceil(this. listeEmployes.length / this.articlesParPage);
    }
 
}
