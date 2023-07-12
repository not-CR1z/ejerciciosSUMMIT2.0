import { Usuario } from 'src/app/models/usuario';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loading = false;
  login: FormGroup;


  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private loginService: LoginService) {
    this.login = this.fb.group
      ({
        usuario: ['', Validators.required],
        password: ['', Validators.required]
      });
  }
  ngOnInit(): void{
    
  }

  log(): void {
    const usuario: Usuario =    
    {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    };
    this.loading = true;
    this.loginService.login(usuario).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.loginService.setLocalStorage(data.usuario);
      this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    })
    /* setTimeout(() => {
      if (usuario.nombreUsuario === 'admin' && usuario.password === '2023') {
        this.login.reset();
        this.router.navigate(['/dashboard'])
      }
      else {
        this.toastr.error('Usuario o contraseña incorrecto', 'Error')
        this.login.reset();
      }
      this.loading = false;
    }, 3000); */

  }


  

}
