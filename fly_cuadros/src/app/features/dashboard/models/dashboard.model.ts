import { Measure } from "src/app/core/models/measures.model";

export interface Box {
    descripcion: string;
    nombre: string;
    id: string;
    imagenes: any[] | null;
    imagen?: string;
    medida_data: Measure;
    imagenSeleccionada?: any;
}