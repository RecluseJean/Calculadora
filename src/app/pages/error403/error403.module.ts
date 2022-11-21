import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error403MasterComponent } from './error403-master/error403-master.component';
import { Error403AdminComponent } from './error403-admin/error403-admin.component';
import { Error403AgricultorComponent } from './error403-agricultor/error403-agricultor.component';


@NgModule({
  declarations: [
    Error403MasterComponent,
    Error403AdminComponent,
    Error403AgricultorComponent
  ],
  imports: [
    CommonModule
  ],

})
export class Error403Module { }
