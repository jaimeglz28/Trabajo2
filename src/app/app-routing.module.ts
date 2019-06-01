import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipioComponent } from './components/principio/principio.component';
import { AgregarComponent } from './components/generals/agregar/agregar.component';
import { TablaComponent } from './components/generals/tabla/tabla.component';
import { ErrorComponent } from './components/error/error.component';
import { BorrarComponent } from './components/generals/borrar/borrar.component';

const routes: Routes = [
{path:'',component:PrincipioComponent},
{path:'agregar',component:AgregarComponent},
{path:'tabla',component:TablaComponent},
{path:'Eliminar',component:BorrarComponent},
{path:'**',component: ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
