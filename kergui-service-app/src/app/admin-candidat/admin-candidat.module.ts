import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCandidatRoutingModule } from './admin-candidat-routing.module';

import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { OffrePostulerComponent } from './offre-postuler/offre-postuler.component';
import { TemoignageComponent } from './temoignage/temoignage.component';

import { HeaderCandidatComponent } from './layout/header-candidat/header-candidat.component';
import { FooterCandidatComponent } from './layout/footer-candidat/footer-candidat.component';
import { HomeCandidatComponent } from './home-candidat/home-candidat.component';
import { MainCandidatComponent } from './main-candidat/main-candidat.component';


@NgModule({
  declarations: [
    ProfilCandidatComponent,
    OffrePostulerComponent,
    TemoignageComponent,
    HeaderCandidatComponent,
    FooterCandidatComponent,
    HomeCandidatComponent,
    MainCandidatComponent
  ],
  imports: [
    CommonModule,
    AdminCandidatRoutingModule
  ]
})
export class AdminCandidatModule { }
