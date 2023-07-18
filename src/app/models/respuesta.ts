export class Respuesta{
    id?: number;
    descripcion: string;
    respuesta: boolean;

    constructor(descripcion: string, esCorrecta: boolean, id?: number){
        this.id = id;
        this.descripcion = descripcion;
        this.respuesta = esCorrecta;
    }
}