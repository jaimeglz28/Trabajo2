import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetjsonService } from '../../services/getjson.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public vista: string = 'principio';
  
  constructor(private router:Router,private service:GetjsonService){}
    public principio=function()
    {
      this.router.navigate(['']);
      this.vista='principio';
    }
  
    public agregar=function()
    {
      
      this.router.navigate(['agregar']);
      this.vista='agregar';
      }
    
    public tabla=function()
    {
      this.router.navigate(['tabla']);
      this.vista='tabla';
    }
    public Eliminar=function()
    {
      this.router.navigate(['Eliminar']);
      this.vista='Eliminar';
    }
    

  ngOnInit() {
    this.service.getConfig().subscribe(respuesta =>{
      const response= respuesta;
      console.log(response);
    });
    
    }
  }
  

