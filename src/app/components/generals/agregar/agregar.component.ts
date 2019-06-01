import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/getjson.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {FormBuilder , FormGroup , Validators, FormControl} from '@angular/forms';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {
  myForm: FormGroup;

  constructor(private service: GetjsonService , ) { }
  
  public validaciones= function (){
    let  validarnumero: RegExp = new RegExp("^[0-9]+$");

       if(!validarnumero.test(this.datos.telefono)){
        alert("Numero de telefono no valido");
        


       }

       
    if(this.validarcorreo()){
      this.datos =
     {
       id:this.datos.id,
      nombre:this.datos.nombre,
      usuario:this.datos.usuario,
      email:this.datos.email,
      telefono:this.datos.telefono,
      direccion:this.datos.direccion
      };
    }
  }
public filtro:RegExp;
  validarcorreo= function(){
    
    return true;
   
  }

  public datos={
    id:null,
    nombre:null,
    usuario:null,
    email:null,
    telefono:null,
    direccion:null };
  public getdata=function()
  {
    this.service.getConfig().subscribe(resp =>{
      const response =resp;
      console.log(response);
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  }
  ngOnInit() {
    this.service.getConfig().subscribe(resp =>{
      const response =resp;
      console.log(response);
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  }
  public submit =function(){
    this.validaciones();
  
    // console.log(this.datos.nombre);
    // this.showPostForm =false;
    
    return this.service.PostConfig(this.datos).subscribe(res=>
      {
        const response=res;
        console.log(response);
        this.getdata();
      },
      error =>{
        console.log(JSON.stringify(error));
      }
    );

};
public delete =function(){
  console.log(this.datos.nombre);
  this.showPostForm=false;
  return this.dropConfig(1).subscribe(res=>
    {
      const response =res;
      console.log(response);
      this.getdata();

    },
    error=>{
      console.log(JSON.stringify(error));
    })
}



    };
  