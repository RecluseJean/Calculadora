import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninInterface } from '../signin-interface';
import { CustomValidators } from '../../tools/custom-validators';
import { SigninService } from '../signin.service'; 
import { TokenStorageService } from 'src/app/util/token-storage.service';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: []
})

export class SigninAdminComponent implements OnInit {

  constructor(private _service : SigninService, 
              private tokenstorageService: TokenStorageService,
              private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  //VARIABLES
  message : any;
  alert = false;
  data : any;
  //FIN VARIABLES

  public userSigninForm = this.fb.group({    
   
    usernameUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    passwordUsuario: new FormControl('', Validators.compose([
      Validators.required,
    ])),

  });

  SigninUsuario() : void{
    var usuario: SigninInterface = {
      usernameUsuario: this.userSigninForm.controls['usernameUsuario'].value,
      passwordUsuario: this.userSigninForm.controls['passwordUsuario'].value
    }    

    console.log(usuario)

    this._service.SignInUser(usuario).subscribe(
      data => {
        this.message = data.message;
        this.data = data;
        this.tokenstorageService.saveToken(data.token);
        this.tokenstorageService.saveUser(data);        
        console.log(data)
        window.location.href='/dashboard';
      },
      err => {
        this.message = err.error.message;
        this.alert = true;  
        setTimeout(() => {
          this.alert = false;
        },3000);
        console.log(err)
      }
    )
  }

}
