import { Measure } from "src/app/core/models/measures.model";

export interface Painting {
    descripcion: string;
    fecha_agregado: string;
    imagenes: any[] | null;
    imagen?: string;
    nombre: string;
    tipo_cuadro: string;
    id: string;
    medidas: Measure[];
    imagenSeleccionada?: any;
}

export const DB_BOX_TYPE_FIELD = "tipo_cuadro"