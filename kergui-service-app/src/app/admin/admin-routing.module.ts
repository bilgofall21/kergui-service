import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path : '', component : MainComponent, children :[
    {path : '',redirectTo : 'home-admin', pathMatch :'full',},
    {path : 'home-admin', component : HomeAdminComponent,},
  ]}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
