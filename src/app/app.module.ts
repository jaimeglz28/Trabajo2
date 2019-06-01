import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './components/generals/agregar/agregar.component';
import { PrincipioComponent } from './components/principio/principio.component';
import { TablaComponent } from './components/generals/tabla/tabla.component';
import { NavbarComponent } from './components/generals/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { BorrarComponent } from './components/generals/borrar/borrar.component';
import { HttpClientModule} from '@angular/common/http';
import { GetjsonService } from './components/services/getjson.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarComponent,
    PrincipioComponent,
    TablaComponent,
    ErrorComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [GetjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
