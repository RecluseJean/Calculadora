import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HistorialLfComponent } from './historial-lf/historial-lf.component';
import { CalcularLfComponent } from './calcular-lf/calcular-lf.component';

const routesDash : Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    //canActivate: [ViewEmpresaGuard],
    children: [

      { path: '', redirectTo: 'historial', pathMatch: 'full' },    
      { path: 'historial', component: HistorialLfComponent},
      { path: 'calcular', component: CalcularLfComponent},
       
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesDash)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }