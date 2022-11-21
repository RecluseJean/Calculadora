import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';


@Injectable({
  providedIn: 'root'
})
export class CalcularLfService {

  private API_URL = GlobalUrl.BASE_URL + 'api/leasing/save';

  constructor(private http: HttpClient) { }
  
  CalcularLeasing(idUsuario:string, leasing: any): Observable<any> {

    const  httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'idUsuario' : idUsuario}),
    };
    
    console.log(httpOptions)
    return this.http.post(
      this.API_URL,
      leasing,
      httpOptions,
    );
  }

}
