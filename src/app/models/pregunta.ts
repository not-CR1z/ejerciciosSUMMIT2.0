import { Respuesta } from "./respuesta";

export class Pregunta{
    descripcion: string;
    listRespuesta: Respuesta[];
    hide?: boolean;

    constructor(decripcion: string, respuestas: Respuesta[]) {
        this.descripcion = this.descripcion;
        this.listRespuesta = respuestas;
    }
}