import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const UBICACION_KEY = 'auth-pais';
const PLANILLA_KEY = 'auth-planilla';
const CUENCA_KEY = 'auth-cuenca';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService { 

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  //TOKEN
  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  //USUARIO
  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  };

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return {};
  };

  
}
