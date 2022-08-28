import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTree, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { MOCK_MENU } from '../../constants';
import { MenuFlatNode, MenuNode } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTree) public tree!: MatTree<any>;
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      level: level,
      ...node
    };
  };

  treeControl = new FlatTreeControl<MenuFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  hasChild = (_: number, node: MenuFlatNode) => node.expandable;
  public readonly menu = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private readonly router: Router) { 
    this.menu.data = MOCK_MENU;
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.tree.treeControl.expandAll();
  }

  public navigate(node: MenuNode): void {
    this.router.navigate([node.basePath, node.id]);
  }

}
