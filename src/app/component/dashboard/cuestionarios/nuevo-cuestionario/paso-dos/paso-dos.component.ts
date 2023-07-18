import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  listPreguntas: Pregunta[] = [];
  loading = false;

  constructor(private cuestionarioService: CuestionarioService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

  guardarPregunta(pregunta: Pregunta): void {
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
  }
  eliminarPregunta(index: number): void {
    this.listPreguntas.splice(index, 1);
  }
  guardarCuestionario(): void {
    const cuestionario: Cuestionario = {
      nombre: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      listPreguntas: this.listPreguntas
    };
    this.loading=true;

    // Envío del cuestionario al backEnd
    this.cuestionarioService.guardarCuestionario(cuestionario).subscribe(data => {
      this.toastr.success('El cuestionario fue registrado con éxito', 'Cuestionario registrado');
      this.router.navigate(['/dashboard']);
      this.loading=false;
    }, error => {
      this.toastr.error('Opps.. Ocurrió un error!', 'error');
      this.router.navigate(['/dashboard']);
      this.loading=false;
    });
  }
}
