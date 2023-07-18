import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent {
nuevaPregunta: FormGroup;
pregunta: Pregunta;
rtaCorrecta = 0;

constructor(private fb: FormBuilder, private toastr: ToastrService){
  this.nuevaPregunta=this.fb.group({
    titulo: ['', Validators.required],
    respuestas: this.fb.array([])
  })
}

// Devuelve FormArray de respuestas
get getRespuestas(): FormArray{
  return this.nuevaPregunta.get('respuestas') as FormArray;
}

// Agregrar respuesta array
agregarRespuesta(): void{
  this.getRespuestas.push(this.fb.group({
    descripcion: ['', Validators.required],
    esCorecta: 0
  }))
}
}
