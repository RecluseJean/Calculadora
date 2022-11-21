import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';
import { SigninInterface } from './signin-interface';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class SigninService {

  private API_URL = GlobalUrl.BASE_URL + 'api/signin/user';

  constructor(private http: HttpClient) { }

  SignInUser(usuario: SigninInterface): Observable<any> {
    return this.http.post(
      this.API_URL,
      usuario,
      httpOptions
    );
  }
}
