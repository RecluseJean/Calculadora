import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { CalcularLfService } from './calcular-lf.service';

@Component({
  selector: 'app-calcular-lf',
  templateUrl: './calcular-lf.component.html',
  styleUrls: []
})
export class CalcularLfComponent implements OnInit {

  constructor(private _service : CalcularLfService,
              private tokenstorageservice : TokenStorageService,
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  user : any;
  message : any;
  alert : any;
  alerttype = 'alert-danger';

  public leasingFinancieroForm = this.fb.group({   
    nombre: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    //PRESTAMO
    precioVentaActivo: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    nAnios: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    frecuenciaPago: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    nDiasAnio: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    porcentajeTEA: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    porcentajeIGV: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    porcentajeImpuestoRenta: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    porcentajeRecompra: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    //COSTE - GASTOS INICIALES
    costesNotariales: new FormControl(''),   
    costesRegistrales: new FormControl(''),
    tasacion: new FormControl(''),
    comisionEstudio: new FormControl(''),
    comisionActivacion: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    //COSTE - GASTO PERIODICO
    comisionPeriodica: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    porcentajeSeguroRiesgo: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    //COSTE OPORTUNIDAD
    tasaDescuentoKs: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    tasaDescuentoWACC: new FormControl('', Validators.compose([
      Validators.required,
    ])),

  });

  CalcularLeasing(){
    var leasing: any = {
      nombreLeasing: this.leasingFinancieroForm.controls['nombre'].value,
      datosLeasing : {

        precioVenta: this.leasingFinancieroForm.controls['precioVentaActivo'].value,
        cantidadAnio: this.leasingFinancieroForm.controls['nAnios'].value,
        frecuenciaPago: this.leasingFinancieroForm.controls['frecuenciaPago'].value,
        diasAnio: this.leasingFinancieroForm.controls['nDiasAnio'].value,
        porcentajeTEA: this.leasingFinancieroForm.controls['porcentajeTEA'].value,
        porcentajeIGV: this.leasingFinancieroForm.controls['porcentajeIGV'].value,        
        porcentajeImpuestoRenta: this.leasingFinancieroForm.controls['porcentajeImpuestoRenta'].value,
        porcentajeRecompra: this.leasingFinancieroForm.controls['porcentajeRecompra'].value,

        costoNotarial: this.leasingFinancieroForm.controls['costesNotariales'].value,
        costoRegistral: this.leasingFinancieroForm.controls['costesRegistrales'].value,
        tasacion: this.leasingFinancieroForm.controls['tasacion'].value,
        comisionEstudio: this.leasingFinancieroForm.controls['comisionEstudio'].value,
        comisionActivacion: this.leasingFinancieroForm.controls['comisionActivacion'].value,
        
        comisionPeriodica: this.leasingFinancieroForm.controls['comisionPeriodica'].value,
        porcentajeSeguroRiesgo: this.leasingFinancieroForm.controls['porcentajeSeguroRiesgo'].value,
        tasaDescuentoKs: this.leasingFinancieroForm.controls['tasaDescuentoKs'].value,
        tasaDescuentoWACC: this.leasingFinancieroForm.controls['tasaDescuentoWACC'].value,
      }    
    }    

    console.log(leasing)

    this.user = this.tokenstorageservice.getUser();

    this._service.CalcularLeasing(this.user.idUsuario, leasing).subscribe(
      data => {
        this.message = data.message;
        this.alert = true; 
        this.alerttype = 'alert-success'
        setTimeout(() => {
          this.alert = false;
        },3000);
        /*
        this.alert = true; 
        this.alerttype = 'alert-success'; 
        */
        console.log(data)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {
        this.message = err.error.message;
        this.alert = true; 
        this.alerttype = 'alert-danger'
        setTimeout(() => {
          this.alert = false;
        },3000);
        /*this.message = err.error.message;
        this.alert = true;  
        this.alerttype = 'alert-danger'; 
        setTimeout(() => {
          this.alert = false;
        },3000);*/
        console.log(err)
      }
    )
  }
  

}
