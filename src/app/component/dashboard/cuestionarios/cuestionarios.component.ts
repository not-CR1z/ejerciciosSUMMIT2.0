import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent {
  nombreUsuario: string;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
  }

  getNombreUsuario(): void {
    this.nombreUsuario = this.loginService.getTokenDecoded();
  }

  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }
}