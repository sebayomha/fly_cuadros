export interface MenuNode {
    name: string;
    id: number;
    basePath: string;
    isExpanded?: boolean;
    children?: MenuNode[]
}

export interface MenuFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    id: number;
    basePath: string;
}