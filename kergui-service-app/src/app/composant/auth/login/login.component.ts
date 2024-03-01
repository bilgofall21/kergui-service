import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProfessionServiceService } from 'src/app/services/profession-service.service';
import { SelectOption } from 'src/app/models/select-option.model';
import { Observable } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';
import { UtulisateurService } from 'src/app/services/utulisateur.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // isAuth$: any;

  constructor( private authentification : AuthService ,
               private router : Router,
               private professionservice : ProfessionServiceService,
               private utilisateurservice : UtulisateurService     
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
  showForgetPassword = false;
  SectionCliquer = false;
  sectionActiver = '';


  // methode pour afficher les sections
  afficherSection(view: string, event : Event): void {
    event.preventDefault(); // Empêche le rechargement de la page 
    this.showConnexion= view === 'connexionuser';
    this.showAuthEmployeur = view === 'inscriptionemployeur';
    this.showAuthEmploye= view === 'inscritionemploye';
    this.showPresentation= view === 'presentationlogin';
    this.showForgetPassword= view === 'forgetpassword';
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

connexion(event: Event): void {
  event.preventDefault();

  const loginData = {
    email: this.formData.email,
    password: this.formData.password
  };

  this.authentification.loginUser(loginData).subscribe(
    (user: any) => {
      this.userfoundid = user.data;
      console.log("connexion status", user);

      localStorage.setItem('user_profile', JSON.stringify(user.data));

      if (user.token) {
        this.authentification.setLoggedIn(true);
        this.affichermessage('success', 'Bienvenue ', user.data.prenom);

        if (user.data.role == "admin" && user.data.statut == "activer") {
          localStorage.setItem("dashboard_type", 'admina');
          localStorage.setItem('access_Token', user.token);
          this.router.navigate(['/admin']);
        } else if (user.data.role == "candidat" && user.data.statut == "activer") {
          localStorage.setItem("dashboard_type", 'candidat');
          localStorage.setItem('access_Token', user.token);
          this.router.navigate(['/admin-candidat']);
        } else if (user.data.role == "employeur" && user.data.statut == "activer") {
          localStorage.setItem("dashboard_type", 'employeur');
          localStorage.setItem('access_Token', user.token);
          this.router.navigate(['/admin-employeur']);
        } else {
          this.affichermessage('error', 'Ce compte désactivé', 'désolé');
        }
      }
    },
    (error: any) => {
      console.error('Erreur lors de la connexion :', error);
      
      this.affichermessage('error', 'Désolé', 'Une erreur s\'est produite lors de la connexion');
    }
  );
}

affichermessage(icone: any, message: string,user:string) {
  Swal.fire({
      position: 'center',
      icon: icone,
      title: message +"" +user,
      showConfirmButton: false,
      timer: 1500,
      width: 480,
      padding: 10,
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

changeMotDePass(): void{
  const newEmail = {
    email : this.email,
  }
  this.utilisateurservice.changePassword(newEmail ).subscribe((resons)=>{
    console.log("what password", Response);

    Swal.fire({
      icon: 'success',
      title: 'Email envoyé',
      text: 'Consultez votre boîte e-mail pour réinitialiser votre mot de passe.',
      // confirmButtonText: 'OK',
      showConfirmButton: false,
      // timer: 1500,
      width: 500,
      padding: 10,
      color : '#ffff',
      background: '#3A6A7E',
    });
     // Rediriger l'utilisateur vers sa boîte e-mail (exemple pour Gmail)
    setTimeout(()=>{
      window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
    }, 3000);
  
  },
  (error) => {
    console.error('Erreur lors de la réinitialisation du mot de passe', error);
    // Afficher une alerte SweetAlert pour informer l'utilisateur de l'erreur
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Une erreur s\'est produite. Veuillez réessayer plus tard.',
      confirmButtonText: 'OK',
      // showConfirmButton: false,
      // timer: 1500,
      width: 400,
      padding: 15,
      color : '#ffff',
      background: '#3A6A7E',
    });
  }
  )
}
// validation

  // Pour vérifier les champs pour la connexion 
  verifEmail : String = "";
  verifPassword: String = "";
  verifNom : String  =  "";
  verifPrenom : String = "";
  verifPasswordConf : String = "";
  verifLieu : string ="";
  verifTelephone : String = "";

  // Variables Si les valeurs sont exactes
  exactEmail : boolean = false;
  exactPassword : boolean = false; 
  exactNom : boolean = false;
  exactPrenom : boolean = false;
  exactPasswordConf : boolean = false;
  exactTelephone : boolean = false;
  exactLieu : boolean = false;


  // ---------=========verification login=========------------------- //

    //  Verification de l'email conexion
    verifEmailConFonction(){
      const emailPattern =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.exactEmail = false;
      
      if(this.formData.email === ""){
        this.verifEmail = "Veuillez renseigner votre email";
      }
      else if (!emailPattern.test(this.formData.email) ){
        this.verifEmail = "Veuillez donner un email valide";
      }
      else {
        this.verifEmail = "";
        this.exactEmail = true;
      }
    }
    verifEmaiMdpo(){
      const emailPattern =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.exactEmail = false;
      
      if(this.email === ""){
        this.verifEmail = "Veuillez renseigner votre email";
      }
      else if (!emailPattern.test(this.email) ){
        this.verifEmail = "Veuillez donner un email valide";
      }
      else {
        this.verifEmail = "";
        this.exactEmail = true;
      }
    }

      // verification mot de passe connexion
    verifPasswordFonction(){
      const passwordPattern=/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
      this.exactPassword = false;
      if(this.formData.password=== ""){
        this.verifPassword = "Veuillez renseigner votre mot de passe";
      }
      else if (this.formData.password.length < 8 ){
        this.verifPassword = "Mot de passe doit être supérieur ou égal à 8";
      }
      // else if (!passwordPattern.test(this.formData.password) ){
      //   this.verifPassword = "Veuillez donner un mot de passe valide ";
      // }
      else{
        this.verifPassword = "";
        this.exactPassword = true;
      }
    }

// ---------=========verification inscription employeur=========------------------- //
    //  Verification de l'email inscription employeur
    verifEmailEmployeur(){
      const emailPattern =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.exactEmail = false;
      
      if(this.registreData.email === ""){
        this.verifEmail = "Veuillez renseigner votre email";
      }
      else if (!emailPattern.test(this.registreData.email) ){
        this.verifEmail = "Veuillez donner un email valide";
      }
      else {
        this.verifEmail = "";
        this.exactEmail = true;
      }
    }
      // verification mot de passe inscription employeur
    verifPasswordEmployeur(){
      const passwordPattern=/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
      this.exactPassword = false;
      if(this.registreData.password=== ""){
        this.verifPassword = "Veuillez renseigner votre mot de passe";
      }
      else if (this.registreData.password.length < 8 ){
        this.verifPassword = "Mot de passe doit être supérieur ou égal à 8";
      }
      // else if (!passwordPattern.test(this.registreData.password) ){
      //   this.verifPassword = "Veuillez donner un mot de passe valide ";
      // }
      else{
        this.verifPassword = "";
        this.exactPassword = true;
      }
    }

    // verification confimation password Employeur
    verifPasswordConfEmployeur(){
      this.exactPasswordConf = false;
      if(this.registreData.password_confirmation  == ""){
        this.verifPasswordConf = "Veuillez renseigner à nouveau votre mot de passe";
      }
      else if (this.registreData.password != this.registreData.password_confirmation ){
        this.verifPasswordConf = "Les deux mots de passe doivent etre conformes";
      }
      else {
        this.verifPasswordConf = "";
        this.exactPasswordConf = true;
      }
    }
  
      // Verification du nom employeur
  verifNomEmployeur() {
    this.exactNom = false;
    if(this.registreData.nom == ""){
      this.verifNom = "Veuillez renseigner votre registreData.";
    }
    else if (this.registreData.nom.length < 2 ){
      this.verifNom = "Le nom doit contenir au moins 2 caractères";
    }
    else {
      this.verifNom = "";
      this.exactNom = true;
    }
  }

  // Verification du prenom employeur
  verifPrenomEmployeur() {
    this.exactPrenom = false;
    if(this.registreData.prenom == ""){
      this.verifPrenom = "Veuillez renseigner votre prenom";
    }
    else if (this.registreData.prenom.length < 2 ){
      this.verifPrenom = "Le prenom doit contenir au moins 2 caractères";
      
    }
    else{
      this.verifPrenom = "";
      this.exactPrenom = true;
    }
  }

  // verification adresse employeur
  verifAdresseEmployeur(){
    this.exactLieu = false;
    if(this.registreData.lieu === ""){
      this.verifLieu = "Veuillez renseigner une adresse";
    }
    else if(this.registreData.lieu.length < 2){
      this.verifLieu = "Le nom de l'adresse doit contenir au moins 2 caractères"
    }
    else if(this.registreData.lieu.length >= 30){
      this.verifLieu = "Le nom de la profession ne doit pas dépasser 30 caractères"
    }else{
      this.verifLieu = "";
      this.exactLieu = true;
    }
    }
  
     // verification du telephone Employeur
     verifNumeroEmployeur(){
      const phonePattern=/^(77|78|76|70|75)[0-9]{7}$/;
      this.exactTelephone = false;
      if(this.registreData.telephone == ""){
        this.verifTelephone = "Veuillez renseigner votre numéro de téléphone";
      }
      // else if(!phonePattern.test(this.registreData.telephone)){
      //   this.verifTelephone = "Veuillez donner un numéro de téléphone valide";
      // }
      else{
        this.verifTelephone = "";
        this.exactTelephone = true; 
      }
    }

    // ---------=========verification inscription employé=========------------------- //
  // verif adresse Employe
  verifAdresseEmploye(){
    this.exactLieu = false;
    if(this.lieu === ""){
      this.verifLieu = "Veuillez renseigner une adresse";
    }
    else if(this.lieu.length < 2){
      this.verifLieu = "Le nom de l'adresse doit contenir au moins 2 caractères"
    }
    else if(this.lieu.length >= 30){
      this.verifLieu = "Le nom de la profession ne doit pas dépasser 30 caractères"
    }else{
      this.verifLieu = "";
      this.exactLieu = true;
    }
    }
    

}
