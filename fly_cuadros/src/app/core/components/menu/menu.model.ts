export interface MenuNode {
    nombre: string;
    id: number;
    basePath: string;
    isExpanded?: boolean;
    children?: MenuNode[]
}

export interface MenuFlatNode {
    expandable: boolean;
    nombre: string;
    level: number;
    id: number;
    basePath: string;
}