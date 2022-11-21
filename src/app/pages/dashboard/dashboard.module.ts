import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CalcularLfComponent } from './calcular-lf/calcular-lf.component';
import { HistorialLfComponent } from './historial-lf/historial-lf.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CalcularLfComponent,
    HistorialLfComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
