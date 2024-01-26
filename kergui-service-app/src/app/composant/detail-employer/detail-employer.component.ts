import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.css']
})
export class DetailEmployerComponent {
    constructor(){}
// variable por pagination
// Attribut pour la pagination
articlesParPage = 3; // Nombre d'articles par page
pageActuelle = 1; // Page actuelle
   
}
