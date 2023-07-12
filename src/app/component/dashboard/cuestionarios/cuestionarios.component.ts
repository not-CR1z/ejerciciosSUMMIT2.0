import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent {
  nombreUsuario: string|null;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
  }

  getNombreUsuario(): void {
    this.nombreUsuario = this.loginService.getNombreUsuario();
  }

  removeLocalStorage(): void {
    localStorage.removeItem('nombreUsuario');
  }
}