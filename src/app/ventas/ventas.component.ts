import { Component, OnInit } from '@angular/core';

import { Venta } from '../venta';
import { VentasService } from "../ventas.service"
//import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private ventasService: VentasService,
    //private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  ventaModel = new Venta("","",null, 1);

  onSubmit() {
    this.ventasService.addVenta(this.ventaModel).subscribe(() => {
      /*this.snackBar.open('Mascota guardada', undefined, {
        duration: 1500,
      });*/
      this.router.navigate(['listar/ventas']);
    })
  }

}
