import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalUrl } from 'src/app/util/global-url';

const  httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class HistorialLfService {

  private API_URL = GlobalUrl.BASE_URL + 'api/leasings/usuario';

  constructor(private http: HttpClient) { }
  
  HistorialLeasing(idUsuario:any): Observable<any> {
    
    return this.http.get(
      `${this.API_URL}/${idUsuario}`,
      httpOptions,
    );
  }

}
