import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';

import { InventoryService } from '../../service/inventory.service';


@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  public inventory: [ProductModel];
  public success: number;
  public title: string;

  public entregados=[
    {"fecha":"05/02/2023","entregado":20,"vendido":19},
    {"fecha":"06/02/2023","entregado":25,"vendido":22}];

    //@Input() productToBuy: [ProductModel];
  
  constructor(	private _inventoryService: InventoryService	) { 
    this.title = "Historial entregas-ventas";

  }

  ngOnInit() {
  	
  }

 
}

