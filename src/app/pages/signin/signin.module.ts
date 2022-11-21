import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninAdminComponent } from './signin-admin/signin-admin.component';



@NgModule({
  declarations: [
    SigninAdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
