import { Component, OnInit } from '@angular/core';

import { VentasService} from "../ventas.service";

import { Venta } from "../venta";

import { MatDialog } from '@angular/material/dialog';

//import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css']
})
export class ListarVentasComponent implements OnInit {

  private ventas: Venta[] = [
    new Venta("Freysner","777",null, 20)
  ];

  constructor(private ventasService: VentasService,) { }

  ngOnInit() {
    this.obtenerVentas();
  }

  obtenerVentas() {
    return this.ventasService
      .getVentas()
      .subscribe((ventas: Venta[]) => this.ventas = ventas);
  }

}
