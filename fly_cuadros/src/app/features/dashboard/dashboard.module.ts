import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common'

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports:[DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
})
export class DashboardModule { }
