import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClientModule) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/usuario';
  }

  saveUser(usuario: Usuario): void{

  }
}
