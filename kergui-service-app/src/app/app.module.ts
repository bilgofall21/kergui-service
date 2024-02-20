import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


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
import { FonctionnementComponent } from './composant/fonctionnement/fonctionnement.component';
import { LoginComponent } from './composant/auth/login/login.component';
import { AnnonceComponent } from './composant/annonce/annonce.component';
import { ServiceDashboardComponent } from './composant/section-dash-admin/service-dashboard/service-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AuthInterceptor } from './interceptors/intercepteur';
import { AuthService } from './services/auth.service';
import { AuthInterceptor, TokenInterceptorProvider } from './interceptors/interceptor';
import { DetailOffreComponent } from './composant/detail-offre/detail-offre.component';
import { ScrfollBarComponent } from './composant/scrfoll-bar/scrfoll-bar.component';
import { AuthGuardService } from './services/auth-guard.service';

// import { AuthInterceptor } from './interceptors/interceptor';

// import { AuthInterceptor } from './interceptors/intercepteur';






// import { AuthInterceptor } from './interceptors/intercepteur';



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
    FonctionnementComponent,
    LoginComponent,
    AnnonceComponent,
    ServiceDashboardComponent,
    DetailOffreComponent,
    ScrfollBarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [
   TokenInterceptorProvider,
   AuthService,
   AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
