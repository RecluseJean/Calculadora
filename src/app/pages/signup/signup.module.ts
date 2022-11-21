import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupAdminComponent } from './signup-admin/signup-admin.component';

@NgModule({
  declarations: [
    SignupAdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
