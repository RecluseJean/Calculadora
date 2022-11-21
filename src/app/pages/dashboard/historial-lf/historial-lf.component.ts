import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { HistorialLfService } from './historial-lf.service';

@Component({
  selector: 'app-historial-lf',
  templateUrl: './historial-lf.component.html',
  styleUrls: []
})
export class HistorialLfComponent implements OnInit {

  constructor(private _service : HistorialLfService,
              private tokenstorageservice : TokenStorageService,
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.HistorialLF();
  }

  user : any;
  dataHistorial : any;

  HistorialLF(){

    this.user = this.tokenstorageservice.getUser();

    this._service.HistorialLeasing(this.user.idUsuario).subscribe(
      data => {
        this.dataHistorial = data;
        /*this.message = data.message;
        this.alert = true; 
        this.alerttype = 'alert-success'
        setTimeout(() => {
          this.alert = false;
        },3000);*/
        /*
        this.alert = true; 
        this.alerttype = 'alert-success'; 
        */
        console.log(data)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {
        /*this.message = err.error.message;
        this.alert = true; 
        this.alerttype = 'alert-danger'
        setTimeout(() => {
          this.alert = false;
        },3000);*/
        
        console.log(err)
      }
    )
  }

}
