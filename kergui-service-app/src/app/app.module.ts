import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { HeaderComponent } from './composant/header/header.component';
import { FooterComponent } from './composant/footer/footer.component';
import { AProposComponent } from './composant/a-propos/a-propos.component';
import { PolitiqueConfidentialiteComponent } from './composant/politique-confidentialite/politique-confidentialite.component';
import { PageContactComponent } from './composant/page-contact/page-contact.component';
import { PageServiceComponent } from './composant/page-service/page-service.component';
import { DetailServiceComponent } from './composant/detail-service/detail-service.component';
import { DetailEmployerComponent } from './composant/detail-employer/detail-employer.component';
import { BluefontDirective } from './bluefont.directive';
import { BlueFontDirective } from './directive/blue-font.directive';
import { GreenFontDirective } from './directive/green-font.directive';
import { DashbordAdminComponent } from './composant/dashbord-admin/dashbord-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    AProposComponent,
    PolitiqueConfidentialiteComponent,
    PageContactComponent,
    PageServiceComponent,
    DetailServiceComponent,
    DetailEmployerComponent,
    BluefontDirective,
    BlueFontDirective,
    GreenFontDirective,
    DashbordAdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
