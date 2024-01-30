export class User {
    id!: string;
    nom!: string;
    prenom!: string;
    email!: string;
    password!: string;
    telephone!: string;
    presentation!:string;
    langueParler!:string;
    civilite!:string;
    // profession_id:number;
    experienceProf!:string;
    dateNaissance!:Date;
    lieu!:string;
    status!:string;
    role!: number;
    imageDeProfil?: File; 
    createdAt!: string;
    updatedAt!: string;
  }
