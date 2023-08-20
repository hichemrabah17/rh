import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauRHComponent } from './components/tableau-rh/tableau-rh.component';
import { AjouterdonneepersoComponent } from './components/ajouterdonneeperso/ajouterdonneeperso.component';
import { TouslespersoComponent } from './components/touslesperso/touslesperso.component';
import { DetailspersoComponent } from './components/detailsperso/detailsperso.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';

const routes: Routes = [
  {path:'tableaubordRH',component:TableauRHComponent,children:[
    {path:'ajouterperso',component:AjouterdonneepersoComponent}, 
    {path:'touslesperso',component:TouslespersoComponent},
    {path:'detailsperso/:id',component:DetailspersoComponent} 
  ]},
  {path:'loginadmin',component:LoginadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
