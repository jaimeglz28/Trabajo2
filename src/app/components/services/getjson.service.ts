import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Practica02 } from '../interfaces/practica02';
import {throwError} from 'rxjs';
import {catchError}from 'rxjs/operators';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class GetjsonService  {

  configUrl = 'http://localhost:3000/datos';

  constructor(private http:HttpClient) { }

  getConfig(){
    return this.http.get(this.configUrl);

  }
  dropConfig(i){
    return this.http.delete(this.configUrl+"/"+i);
  }
  PostConfig(datos){
    const json=JSON.stringify(datos);
    const headers=new HttpHeaders().set('content-Type','application/json')
    return this.http.post(this.configUrl,json,{headers}).pipe(
      catchError(this.handleError)
      
    );
  }
  private handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('An error', error.error.message);
    } else{
      console.error('returned code${error.status},'+'${error.error}');
    }
    return  throwError('please try again later');
  }
  
}
