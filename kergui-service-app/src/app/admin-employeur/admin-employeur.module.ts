import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeurRoutingModule } from './admin-employeur-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './main/main.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PublicationEmployeurComponent } from './publication-employeur/publication-employeur.component';
import { ProfilEmployeurComponent } from './profil-employeur/profil-employeur.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    HomeAdminComponent,
    PublicationEmployeurComponent,
    ProfilEmployeurComponent
  ],
  imports: [
    CommonModule,
    AdminEmployeurRoutingModule
  ]
})
export class AdminEmployeurModule { }
