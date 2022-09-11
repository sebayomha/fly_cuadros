import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTree, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MenuFlatNode, MenuNode } from './menu.model';
import { MenuService } from './services/menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
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
  
  private readonly onDestroy$ = new Subject<void>();
  
  constructor(private readonly router: Router, private readonly menuService: MenuService) { 
  }
  
  public ngOnInit(): void {
    this.menuService.getMenu().pipe(takeUntil(this.onDestroy$)).subscribe((menu) => {
      this.menu.data = menu;
      this.tree.treeControl.expandAll();
      
    })
  }
  
  public ngOnDestroy(): void {
   this.onDestroy$.next();
   this.onDestroy$.complete();
  }

  public navigate(node: MenuNode): void {
    this.router.navigate([node.basePath, node.id]);
  }

}
