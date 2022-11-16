import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostulanteSigninComponent } from './postulante/postulante-signin.component';
import { ReclutadorSigninComponent } from './reclutador/reclutador-signin.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [
    PostulanteSigninComponent,
    ReclutadorSigninComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SigninModule { }
