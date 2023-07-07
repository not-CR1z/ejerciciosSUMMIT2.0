import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-pasword',
  templateUrl: './cambiar-pasword.component.html',
  styleUrls: ['./cambiar-pasword.component.css']
})
export class CambiarPaswordComponent {
  cambiarPassword: FormGroup;
  constructor(private fb: FormBuilder) {
    this.cambiarPassword = this.fb.group({
      lastPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: [''],
    }, { validator: this.checkPassword })
  }
  checkPassword(group: FormGroup): any {
    const pass = group.controls.newPassword.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  guardarPassword(): void {
    console.log(this.cambiarPassword)
  }
}
