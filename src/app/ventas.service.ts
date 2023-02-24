import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Venta } from "./venta";

import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class VentasService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getVentas() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getVenta(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  }

  addVenta(venta: Venta) {
    return this.http.post(`${this.baseUrl}/post.php`, venta);
  }

  /*deleteVenta(venta: Venta) {
    return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${venta.id}`);
  }*/

  updateVenta(venta: Venta) {
    return this.http.put(`${this.baseUrl}/update.php`, venta);
  }
}
