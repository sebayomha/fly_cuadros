import { MenuNode } from "./components/menu/menu.model";

export enum EVENT_RESULT {
    CONFIRM = "CONFIRMAR"
}

export const MOCK_MENU: MenuNode[] = [
    {
      name: 'Imágenes',
      id: 0,
      basePath: 'imagenes',
      children: [{name: 'Fotos', id: 0, basePath:'imagenes'}, {name: 'Videos', id: 1, basePath:'videos'}],
    },
    {
      name: 'Cuadros',
      isExpanded: true,
      id: 1,
      basePath: 'cuadros',
      children: [
        {
            name: 'Cuadros Box',
            id: 0,
            basePath:'cuadros'
        },
        {
            name: 'Cuadros Box 2',
            id: 1,
            basePath:'cuadros'
        },
        {
            name: 'Cuadros Box 3',
            id: 2,
            basePath:'cuadros'
        },
        {
            name: 'Cuadros Box 4',
            id: 3,
            basePath:'cuadros'
        },
      ],
    },
];