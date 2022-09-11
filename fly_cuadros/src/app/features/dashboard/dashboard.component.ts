import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from './models/dashboard.model';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public showOverlay = false;
  public boxTypes$!: Observable<Box[]>

  constructor(private readonly dashboardService: DashboardService) {}

  public ngOnInit(): void {
    this.boxTypes$ = this.dashboardService.getBoxTypes();  
  }

}
