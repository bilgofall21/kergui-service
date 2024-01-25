import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // variable pour cacher ou afficherles sections
  showConnexion = true;
  showPresentation = false;
  showAuthEmployeur = false;
  showAuthEmploye = false;

  // methode pour afficher les sections
  afficherSection(view: string, event : Event): void {
    event.preventDefault(); // Empêche le rechargement de la page 
    this.showConnexion= view === 'connexionuser';
    this.showAuthEmployeur = view === 'inscriptionemployeur';
    this.showAuthEmploye= view === 'inscritionemploye';
    this.showPresentation= view === 'presentationlogin';
  }


  imageUrl: string | ArrayBuffer = 'https://adminlte.io/themes/AdminLTE/dist/img/user3-128x128.jpg';

  onFileSelected(event: { target: any; }): void {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        // this.imageUrl = reader.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
}
