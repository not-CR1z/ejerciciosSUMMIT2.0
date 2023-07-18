import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent {
  tituloCuestionario: string;
  descripcionCuestionario: string;
  listPreguntas: Pregunta[] = [];

  constructor(private cuestionarioService: CuestionarioService, private toastr: ToastrService, private router: Router){ }

  ngOnInit(): void{
    this.tituloCuestionario=this.cuestionarioService.tituloCuestionario;
    this.descripcionCuestionario=this.cuestionarioService.descripcionCuestionario;
  }

}
