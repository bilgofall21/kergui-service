export class Publication {
    id!:string;
    nom_prof!:string;
    lieu!:string;
    typeContrat!:string;
    description!:string;
    slaireMinimum!:string;
    experienceMinimum!:string;
    user_id!:string;
    profession_id!:string;
    etat!:string;
    dateline! : Date;
    image! : File;
    created_at!:string;
    updated_at!:string; 
profession: any;
user: any;
}