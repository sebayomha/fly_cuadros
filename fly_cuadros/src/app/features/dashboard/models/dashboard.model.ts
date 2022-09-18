import { Measure } from "src/app/core/models/measures.model";

export interface Box {
    descripcion: string;
    nombre: string;
    id: string;
    imagen: string;
    medida_data: Measure;
}