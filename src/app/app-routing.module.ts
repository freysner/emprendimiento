import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';

import { GetClientsComponent } from './component/clients/get-clients/get-clients.component';
import { AddClientComponent } from './component/clients/add-client/add-client.component';
import { DetailsClientComponent } from './component/clients/details-client/details-client.component';
import { EditClientComponent } from './component/clients/edit-client/edit-client.component';

import { GetRegistryComponent } from './component/registry/get-registry/get-registry.component';
import { AddRegistryComponent } from './component/registry/add-registry/add-registry.component';
import { DetailRegistryComponent } from './component/registry/detail-registry/detail-registry.component';

import { ReporteVentasComponent } from './reportes/ventas/ventas.component';

import { VentasComponent } from './ventas/ventas.component';
import { ListarVentasComponent } from './listar-ventas/listar-ventas.component';

import { EntregasComponent } from './reportes/entregas/entregas.component';
import { PagosComponent } from './reportes/pagos/pagos.component';

const routes: Routes = [
	//home
	{path: "", redirectTo: "home", pathMatch: 'full'},
	{path: "home", component: HomeComponent},

	//reportes
	{path: "reporte/entregas", component: EntregasComponent},
	{path: "reporte/ventas", component: ReporteVentasComponent},
	{path: "reporte/pagos", component: PagosComponent},
	

	//clientes
	{path: "clients", component: GetClientsComponent},
	{path: "clients/add", component: AddClientComponent},
	{path: "clients/details/:id", component: DetailsClientComponent},
	{path: "clients/edit/:id", component: EditClientComponent},

	//registro
	{path: "registry", component: GetRegistryComponent},
	{path: "registry/add", component: AddRegistryComponent},
	{path: "registry/detail/:id", component: DetailRegistryComponent},

	//ventas
	{path: "ventas", component: VentasComponent},
	{ path: "listar/ventas", component: ListarVentasComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
