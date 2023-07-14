import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login';
  }

  login(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  setLocalStorage(data: string): void {
    localStorage.setItem('token', data);
  }

  getNombreUsuario(): string|null {
    return localStorage.getItem('nombreUsuario');
  }


  // Método con error
  /* getTokenDecoded(): any {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken('(token: string): any');
    return decodedToken;
  } */

  removeLocalStorage(): void{
    localStorage.removeItem('token');
  }
}
