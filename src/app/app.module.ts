import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterdonneepersoComponent } from './components/ajouterdonneeperso/ajouterdonneeperso.component';
import { TableauRHComponent } from './components/tableau-rh/tableau-rh.component';
import { RHsidebarComponent } from './components/rhsidebar/rhsidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TouslespersoComponent } from './components/touslesperso/touslesperso.component';
import { DetailspersoComponent } from './components/detailsperso/detailsperso.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterdonneepersoComponent,
    TableauRHComponent,
    RHsidebarComponent,
    TouslespersoComponent,
    DetailspersoComponent,
    LoginadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
