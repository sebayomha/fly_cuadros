import { EVENT_RESULT } from "src/app/core/constants";

export interface PurchaseOutput {
    event: EVENT_RESULT,
    data: any;
}

export interface StorePurchaseRequest {
    idCuadro: string;
    precio: string;
    idMedida: string;
    descripcionMedida: string;
    imagen: string;
    tipoImagen: string;
}

export interface PurchaseResponse extends StorePurchaseRequest {
    id: string;
}