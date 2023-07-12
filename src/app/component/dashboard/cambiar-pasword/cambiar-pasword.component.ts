import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-pasword',
  templateUrl: './cambiar-pasword.component.html',
  styleUrls: ['./cambiar-pasword.component.css']
})
export class CambiarPaswordComponent implements OnInit {
  cambiarPassword: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private toastr: ToastrService, private router: Router) {
    this.cambiarPassword = this.fb.group({
      lastPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: [''],
    }, { validator: this.checkPassword })
  }
  ngOnInit(): void {
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.newPassword.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  guardarPassword(): void {

    const changePassword: any = {
      passwordAnterior: this.cambiarPassword.value.lastPassword,
      nuevaPassword: this.cambiarPassword.value.newPassword
    };
    console.log(changePassword);
    this.loading = true;
    this.usuarioService.changePassword(changePassword).subscribe(data => {
      this.toastr.info(data.message);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.loading = false;
      this.cambiarPassword.reset();
      this.toastr.error(error.error.message, 'Error!');
    });
  }
}
