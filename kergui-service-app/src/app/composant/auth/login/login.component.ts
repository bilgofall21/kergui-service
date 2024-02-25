import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { SelectOption } from 'src/app/models/select-option.model';
import { Observable } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // isAuth$: any;

  constructor( private authentification : AuthService ,
               private router : Router,
               private professionservice : ProfessionServiceService     
               ){}
               utilisateurConnecte : boolean = false;
  ngOnInit(): void {
    this.useProfession();
    // this.utilisateurConnecte = AuthService.utilisateurConnecte()
    // this.utilisateurConnecte = this.authentification.isLoggedIn();
  }

  // variable pour cacher ou afficherles sections
  showConnexion = true;
  showPresentation = false;
  showAuthEmployeur = false;
  showAuthEmploye = false;
  SectionCliquer = false;
  sectionActiver = '';


  // methode pour afficher les sections
  afficherSection(view: string, event : Event): void {
    event.preventDefault(); // Empêche le rechargement de la page 
    this.showConnexion= view === 'connexionuser';
    this.showAuthEmployeur = view === 'inscriptionemployeur';
    this.showAuthEmploye= view === 'inscritionemploye';
    this.showPresentation= view === 'presentationlogin';
    this.sectionActiver = view;
  }

  // methode pour afficher avec le bouton la section cliquer
  afficherSectionCliquer(): void{
    if(this.sectionActiver === 'inscriptionemployeur'){
      this.showAuthEmployeur=true;
    }else if(this.sectionActiver === 'inscritionemploye'){
      this.showAuthEmploye =true;
    }
   
  }

// variable pour recuperer input

formData = {
  email: '',
  password: '',
};
userfoundid = '';


// connexion methode
// submitFunction(event: Event, registerForm :NgForm): void {
//   event.preventDefault();
//   console.log("voirrrrrr", JSON.stringify(registerForm.value));

//   if (this.formData.email !== '' && this.formData.password !== '') {
//     const loginData = {
//       email: this.formData.email,
//       password: this.formData.password
//     };
//     this.authentification.loginUser(loginData).subscribe(
//       (user: any) => {
      
//         this.utilisateurConnecte = true;
//         console.log("etat anomouu", this.utilisateurConnecte);
       
//         this.userfoundid = user.data;
   
// localStorage.setItem('user_profile', JSON.stringify(user.data));

//         if (user.token) {
//           this.affichermessage('success', 'Bienvenue ',  user.data.prenom);
      

//           if (user.data.role == "admin" && user.data.statut  == "activer") {
         
//             this.utilisateurConnecte = true;
//             this.authentification.setLoggedIn(true);
        
//             localStorage.setItem("dashboard_type", 'admina'); 
//             localStorage.setItem('access_Token', user.token);
//             this.router.navigate(['/admin']);
//           this.authentification.setUserId(user.data.id);
//           }
//           else if (user.data.role == "candidat" && user.data.statut  == "activer") {
     
//             this.authentification.setLoggedIn(true);
//             this.utilisateurConnecte = true;

//             localStorage.setItem("dashboard_type", 'candidat');
//             localStorage.setItem('access_Token', user.token);          
//             this.router.navigate(['/admin-candidat']);
//           }
//           else if (user.data.role == "employeur" && user.data.statut  == "activer") {
       
//             localStorage.setItem('access_Token', user.token);
//               localStorage.setItem("dashboard_type", 'candidat');
//             this.utilisateurConnecte = true;
//             this.authentification.setLoggedIn(true);

//             this.router.navigate(['/admin-employeur']);
//           }
//           else {
//             this.affichermessage('error', 'Ce compte a été désactive', 'error');
//           }
//         } else {
//           this.affichermessage('error', 'Oops', 'Login ou mot de passe incorrecte');
//         }
//       },
//       (error: any) => {
//         console.error('Erreur lors de la connexion :', error);
//         this.affichermessage('error', 'Désolé', 'Une erreur s\'est produite lors de la connexion');
//       }
//     );

//   } else {
//     this.affichermessage('error', 'Désolé', ' Les Informations que vous avez saisies sont incorrectes!');
//   }
// }

onEmailInput(control: any): void {
  if (control.invalid && !control.touched) {
    control.control.markAsTouched(); // Marquer le champ comme "touché" uniquement si invalide et non touché
  }
}

connexion(event : Event): void{
  event.preventDefault();
  // console.log("voirrrrrr", JSON.stringify(registerForm.value));
  // objet contenant les donneé envoye
  const loginData = {
    email: this.formData.email,
    password: this.formData.password
  };
  this.authentification.loginUser(loginData,).subscribe((user : any)=>{
    this.userfoundid = user.data;
      // Stocker l'objet utilisateur recut
      console.log("connexion status", user);
localStorage.setItem('user_profile', JSON.stringify(user.data));
      if (user.token) {
         // Mise à jour de l'état de l'utilisateur connecté
      this.authentification.setLoggedIn(true);
        this.affichermessage('success', 'Bienvenue ',  user.data.prenom);
          // redirection suivant le role
          if (user.data.role == "admin" && user.data.statut  == "activer"){
            localStorage.setItem("dashboard_type", 'admina'); 
            // stockage du token sur le local storage
            localStorage.setItem('access_Token', user.token);
              // rediriger vers dashbord admin
            this.router.navigate(['/admin']);
          } else if (user.data.role == "candidat" && user.data.statut  == "activer"){
            localStorage.setItem("dashboard_type", 'candidat');
            // stockage du token sur le local storage
            localStorage.setItem('access_Token', user.token);
              // rediriger vers dashbord admin-candidat
            this.router.navigate(['/admin-candidat']);
          }else if (user.data.role == "employeur" && user.data.statut  == "activer"){
            localStorage.setItem("dashboard_type", 'employeur');
              // stockage du token sur le local storage
              localStorage.setItem('access_Token', user.token);
              // rediriger vers dashbord admin-employeur
            this.router.navigate(['/admin-employeur']);
          } else {
            this.affichermessage('error', 'Ce compte a été désactive', 'désolé');
          }
        };
        (error: any) => {
          console.error('Erreur lors de la connexion :', error);
          this.affichermessage('error', 'Désolé', 'Une erreur s\'est produite lors de la connexion');
        }
  })
}

affichermessage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: false,
      timer: 1500,
      width: 400,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E',
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
  if(this.registreData.email !== '' && this.registreData.password !==''  && this.registreData.nom !== '' && this.registreData.prenom !== '' && this.registreData.telephone !== '' && this.registreData.lieu !== '' && this.registreData.password_confirmation !== '' ) {

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
       
        Swal.fire({
          icon: 'success',
          title: 'Inscription réussie',
          text: 'Vous êtes inscrit avec succès !',
          confirmButtonText: 'Se connecter',
          confirmButtonColor: "#3A6A7E",
            width: 400,
            padding: 15,
            color : '#ffff',
            background: '#3A6A7E',
        }).then((result) => {
          if(result.isConfirmed){
            this.registreData = {
              nom : "",
              prenom : "",
              email : "",
              telephone : "",
              lieu : "",
              password : "",
              password_confirmation : "",
              imageDeProfil : "",
            }
            this.showConnexion = true;
            this.showPresentation = false;
            this.showAuthEmployeur = false;
            this.showAuthEmploye = false;
          }
        })

        // Handle successful registration, e.g., show a success message or navigate to another page
      },
      (error: any) => {
        this.affichermessageregister('error', 'desole', ' Inscription non validé');
        console.error('Erreur durant inscription:', error);
        // Handle registration error, e.g., show an error message
      }
      
    );
  }else{
    this.affichermessage('error', 'Verifiez', ' information manquante ou incorrect');
   
  }

}
registerUserEmploye(): void {
  // Perform additional validation if needed
    
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
  
    console.log("voir info rentrer", this.registreData);
    // Call the registration method in your authentication service
    this.authentification.registerEmploye(formData).subscribe(
      
      (response: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Inscription réussie',
          text: 'Vous êtes inscrit avec succès !',
          confirmButtonText: 'Se connecter',
          confirmButtonColor: "#3A6A7E",
            width: 400,
            padding: 15,
            color : '#ffff',
            background: '#3A6A7E',
        }).then((result) => {
          if(result.isConfirmed){
            this.registreEmploye = {
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
           
            this.showConnexion = true;
            this.showPresentation = false;
            this.showAuthEmployeur = false;
            this.showAuthEmploye = false;
          }
        })
        // this.affichermessageregister('success', 'Bravo', ' Inscription reussie');
        // console.log(  "inscription successfully", response); 
      },
      (error: any) => {
        this.affichermessageregister('error', 'desole', ' Inscription non validé');
        console.error('Erreur durant inscription:', error);
        // Handle registration error, e.g., show an error message
      }
     
    );
  

}



affichermessageregister(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: false,
      timer: 1500,
      width: 400,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E'
  })
}
affichermessageemployeur(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: false,
      // timer: 1500
      timer: 1500,
      width: 400,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E'
  })
}

getFile(event: any) {
  console.warn(event.target.files[0]);
  this.image= event.target.files[0] as File ;
}
selectOptionData: any;

useProfession() :  void{
  this.professionservice.getProfession().subscribe((data)=>{

this.selectOptionData = data.data;
// console.log("voir profession", this.selectOptionData);
  })
}


LogOutUser() : void{
  this.authentification.deconnexion().subscribe((respons)=>{ 
    this.authentification.setLoggedIn(false);
    console.log("byyy byyyy", respons);
    localStorage.removeItem('access_Token');
    localStorage.removeItem('user_profile');
    this.router.navigate(['/login']);
 
    // return new Observable<any>();
    
  })
}

}
