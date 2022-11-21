import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../tools/custom-validators';
import { UserSignup } from './signup-admin-interface';  
import { SignupAdminService } from './signup-admin.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: []
})

export class SignupAdminComponent implements OnInit {

  constructor(private _service : SignupAdminService, 
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  //VARIABLES
  message : any;
  alert : any;
  alerttype = 'alert-success';
  //FIN VARIABLES

  public userSignupForm = this.fb.group({    
    nombreUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+( [a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+)*)")
    ])),

    apellidoUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+( [a-zA-Z'àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.-]+)*)")
    ])),

    emailUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ])),
    
    passwordUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { passwordnumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {passworduppercase: true}),
      CustomValidators.patternValidator(/[a-z]/, {passwordsmallcase: true}),
      CustomValidators.patternValidator(/[@#$:\^%&*]/, {passwordspecialcharacter: true})
    ])),

  });

  SignupUsuario() : void{
    var usuario: UserSignup = {
      nombreUsuario: this.userSignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.userSignupForm.controls['apellidoUsuario'].value,
      usernameUsuario: this.userSignupForm.controls['usernameUsuario'].value,
      emailUsuario: this.userSignupForm.controls['emailUsuario'].value,
      passwordUsuario: this.userSignupForm.controls['passwordUsuario'].value
    }    
    console.log(usuario)
    this._service.SignUpUser(usuario).subscribe(
      data => {
        this.message = data.message;
        this.alert = true; 
        this.alerttype = 'alert-success'; 
        setTimeout(() => {
          this.alert = false;
        },3000);
        console.log(data)
        //this.loggedPostulante = this.tokenstorageService.getUser();
        //this.router.navigate(['/postulante/' + this.loggedPostulante.idPostulante + '/profile']);
      },
      err => {
        this.message = err.error.message;
        this.alert = true;  
        this.alerttype = 'alert-danger'; 
        setTimeout(() => {
          this.alert = false;
        },3000);
        console.log(err)
      }
    )
  }

}
