import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { SelectOption } from 'src/app/models/select-option.model';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor( private authentification : AuthService ,
               private router : Router,
               private professionservice : ProfessionServiceService     
               ){}
  ngOnInit(): void {
    this.useProfession();
  }

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

// variable pour recuperer input

formData = {
  email: '',
  password: '',
};
userfoundid = '';

 utilisateurConnecte : boolean = false;
// connexion methode
submitFunction(event: Event): void {
  event.preventDefault();

  if (this.formData.email !== '' && this.formData.password !== '') {
   
    const loginData = {
      email: this.formData.email,
      password: this.formData.password
    };

    this.authentification.loginUser(loginData).subscribe(
      (user: any) => {
        console.log("wouy", user);

        this.userfoundid = user.data;
        // let useretat = user.role;

        if (user.token) {
          this.affichermessage('success', 'Bienvenu', user.data.prenom);
        this.utilisateurConnecte =true;
          // alert(this.userfoundid);
          if (user.data.role == "admin" && user.data.statut  == "activer") {
            // stocker notre les info de la requete dans notre localstorage
            localStorage.setItem('access_Token', user.token);
            

        
            this.router.navigate(['/admin']);

          this.authentification.setUserId(user.data.id);
          }
          else if (user.data.role == "candidat" && user.data.statut  == "activer") {
            // stocker notre les info de la requete dans notre localstorage
            localStorage.setItem('access_Token', user.token);
            

            //recuperer le userConnecter
            // const access_Token = JSON.parse(
            //   localStorage.getItem('access_Token') || ''
            // );
          
            this.router.navigate(['/accueil']);
            
         
          }
          else if (user.data.role == "employeur" && user.data.statut  == "activer") {
            // stocker notre les info de la requete dans notre localstorage
            localStorage.setItem('access_Token', user.token);

            //recuperer le userConnecter
            // const access_Token = JSON.parse(
            //   localStorage.getItem('access_Token') || ''
            // );
            this.router.navigate(['/admin-employeur']);
          }
          else {
            this.affichermessage('error', 'Ce compte a été desactive', 'error');
          }
        } else {
          this.affichermessage('error', 'Oops', 'Login ou Mot de passe Incorrecte');
        }
      },
      (error: any) => {
        console.error('Erreur lors de la connexion :', error);
        this.affichermessage('error', 'Oops', 'Une erreur s\'est produite lors de la connexion');
      }
    );

  } else {
    this.affichermessage('error', 'Oops', ' Les Informations que vous avez saisies sont incorrectes!');
  }
}

affichermessage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: true,
      // timer: 1500
  })
}

// connecion fin
public image:any;

registreData = {
  nom : "",
  prenom : "",
  email : "",
  telephone : "",
  lieu : "",
  password : "",
  password_confirmation : "",
  imageDeProfil : "",
}
registreEmploye = {
  nom : "",
  prenom : "",
  email : "",
  telephone : "",
  lieu : "",
  password : "",
  password_confirmation : "",
  imageDeProfil : "",
  langueParler:"",
civilite:"",
profession_id : "",
experienceProf:"",
dateNaissance :"",
presentation:"",
}

// inscription debut

nom: string =""; 
prenom: string ="";
email: string ="";
password: string = "";
password_confirmation : string ="";
telephone: string ="";
presentation:string ="";
langueParler:string ="";
civilite:string ="";
profession_id : string ="";
experienceProf:string ="";
dateNaissance :string ="";
lieu:string ="";
imageDeProfil!: File; 


registerUser(): void {
  // Perform additional validation if needed
  console.log("voir info rentrer", this.registreData);
  let formData=new FormData();
  formData.append('nom', this.registreData.nom);
  formData.append('prenom', this.registreData.prenom);
  formData.append('email', this.registreData.email);
  formData.append('telephone', this.registreData.telephone);
  formData.append('lieu', this.registreData.lieu);
  formData.append('password', this.registreData.password);
  formData.append('password_confirmation', this.registreData.password_confirmation);
  formData.append('imageDeProfil', this.image);

  
  // Call the registration method in your authentication service
  this.authentification.registerUser(formData).subscribe(
    (response: any) => {
      console.log(  "inscription successfully", response);
      // Handle successful registration, e.g., show a success message or navigate to another page
    },
    (error: any) => {
      console.error('Erreur durant inscription:', error);
      // Handle registration error, e.g., show an error message
    }
  );

}
registerUserEmploye(): void {
  // Perform additional validation if needed
  console.log("voir info rentrer", this.registreData);
  let formData=new FormData();
  formData.append('nom', this.registreEmploye.nom);
  formData.append('prenom', this.registreEmploye.prenom);
  formData.append('email', this.registreEmploye.email);
  formData.append('telephone', this.registreEmploye.telephone);
  formData.append('lieu', this.registreEmploye.lieu);
  formData.append('password', this.registreEmploye.password);
  formData.append('password_confirmation', this.registreEmploye.password_confirmation);
  formData.append('dateNaissance', this.registreEmploye.dateNaissance);
  formData.append('langueParler', this.registreEmploye.langueParler);
  formData.append('presentation', this.registreEmploye.presentation);
  formData.append('civilite', this.registreEmploye.civilite);
  formData.append('profession_id', this.registreEmploye.profession_id);
  formData.append('experienceProf', this.registreEmploye.experienceProf);
  formData.append('imageDeProfil', this.image);

  
  // Call the registration method in your authentication service
  this.authentification.registerEmploye(formData).subscribe(
    (response: any) => {
      console.log(  "inscription successfully", response);
      // Handle successful registration, e.g., show a success message or navigate to another page
    },
    (error: any) => {
      console.error('Erreur durant inscription:', error);
      // Handle registration error, e.g., show an error message
    }
  );

}

getFile(event: any) {
  console.warn(event.target.files[0]);
  this.image= event.target.files[0] as File ;
}
selectOptions: []=[];
  selectedOption!: number;
useProfession() :  void{
  this.professionservice.getSelectOption().subscribe((options)=>{
this.selectOptions=options;
console.log("info formation", this.selectOptions);
  })
}


LogOutUser() : void{
  this.authentification.deconnexion().subscribe((respons)=>{

    console.log("byyy byyyy", respons);
    localStorage.removeItem('access_token');
   this.utilisateurConnecte = false;
    return new Observable<any>();
    
  })
}

}
