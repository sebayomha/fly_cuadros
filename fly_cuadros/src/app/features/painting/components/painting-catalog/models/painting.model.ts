import { Measure } from "src/app/core/models/measures.model";

export interface Painting {
    descripcion: string;
    fecha_agregado: string;
    imagen: string;
    nombre: string;
    tipo_cuadro: string;
    id: string;
    medida: string;
    medida_data: Measure
}

export const DB_BOX_TYPE_FIELD = "tipo_cuadro"