import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';

import { SigninAdminComponent } from './pages/signin/signin-admin/signin-admin.component';

import { SignupAdminComponent } from './pages/signup/signup-admin/signup-admin.component';

import { Error403AdminComponent } from './pages/error403/error403-admin/error403-admin.component';
import { Error403AgricultorComponent } from './pages/error403/error403-agricultor/error403-agricultor.component';
import { Error403MasterComponent } from './pages/error403/error403-master/error403-master.component';

const routes: Routes = [
  
  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},

  //Signin//
  { path: 'signin', component: SigninAdminComponent},

  //Signup//
  { path: 'signup', component: SignupAdminComponent},

  //Error403
  { path: 'error403/master', component: Error403MasterComponent, data: { title: 'Error' } },
  { path: 'error403/admin', component: Error403AdminComponent, data: { title: 'Error' } },
  { path: 'error403/agricultor', component: Error403AgricultorComponent, data: { title: 'Error' } },
  
  //Dashboard
  { path: '',
    loadChildren: () => import ('./pages/dashboard/dashboard.module').then(module =>module.DashboardModule),
  },

  { path: '**', redirectTo: 'index'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
