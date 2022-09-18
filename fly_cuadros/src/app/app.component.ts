import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './core/animations';
import { MeasuresService } from './core/services/measures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  
  constructor(private readonly contexts: ChildrenOutletContexts, private readonly measuresService: MeasuresService) {}
  
  public ngOnInit(): void {
    this.measuresService.loadMeasures();
  }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
