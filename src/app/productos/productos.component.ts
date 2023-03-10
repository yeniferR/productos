import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from '../Servicios/servicio-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public response:any;

  constructor( public productoServicio:ServicioProductosService) { }

  ngOnInit() {
  // al inicializar el componente se llame el servicio

    this.productoServicio.getProductos().subscribe(
    (data)=>(this.response = data),
    (err) => console.log("error"),
    ()=>{
      if (this.response) {
        console.log( "sdsd",this.response);
      }

    });

  }

}
