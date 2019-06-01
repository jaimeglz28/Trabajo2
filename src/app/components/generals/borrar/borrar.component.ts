import { Component, OnInit } from '@angular/core';

import { GetjsonService } from '../../services/getjson.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  constructor(private service: GetjsonService) { }
    public datos;
    public agregar = function()
    {
     this.datos.push(
       {
         id: "null",
       nombre:"null",
       usuario:"null",
       telefono:"null",
       direccion:"null",
       email:"null",
       foto:"null"
     });
   
    }  
    
   
   
   
     ngOnInit() {
       this.service.getConfig().subscribe(resp =>{
         const response =resp;
         this.datos=response;
         console.log(response);
       },
       error =>{
         console.log(JSON.stringify(error));
       }
       );

       
     }
     public delete (datosid: number){
      console.log(this.datos.nombre);
     
      
      return this.service.dropConfig(datosid).subscribe(res=>
        { 
          const response =res;
          console.log(response);
          this.getdata();
    
        },
        error=>{
          console.log(JSON.stringify(error));
        })
  }
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
  

   }
   
