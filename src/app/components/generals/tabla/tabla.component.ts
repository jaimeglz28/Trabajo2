import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/getjson.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

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
}
