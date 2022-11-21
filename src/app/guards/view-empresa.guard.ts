import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/util/token-storage.service'; 

@Injectable({
  providedIn: 'root'
})
export class ViewEmpresaGuard implements CanActivate {

  usuario:any;

  constructor(private Token: TokenStorageService, private router : Router){}

  TokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry; 
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      
    this.usuario = this.Token.getUser();

    if(!this.usuario.token){
      this.router.navigate(['/index']);
      return false;
    }else{

      var a = 'ROLE_ADMIN'
      var b = 'ROLE_EMPRESA'
      var c = 'ROLE_AGRICULTOR'
      
      if (this.TokenExpired(this.usuario.token)) {
        //this.expiradaso =  'expirado';
        this.Token.signOut();
        this.router.navigate(['/signin/empresa']);
        return false;
      } else {
        //this.expiradaso =  'valido';  
        if( this.usuario.authorities[0].authority == b){
          return true;
        }else{

          if(this.usuario.authorities[0].authority == a || this.usuario.authorities[0].authority == c){
            this.router.navigate(['/error403/empresa']);     
            return false;
          }else{
            this.router.navigate(['/index']);
            return false;
          }

        }
      }
    }
    
    
  }

  
}