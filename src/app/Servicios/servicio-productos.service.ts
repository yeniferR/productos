import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {
  public url:string;

  constructor(private  http:HttpClient) {
    this.url = 'https://localhost:44341/api/usuarios'
  }

  getProductos():Observable<any>{
    return this.http.post(`${this.url}`,"");
  }

}
