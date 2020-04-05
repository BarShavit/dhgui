import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { StateModule } from '../state/state.module';
import { LivelinessModule } from '../liveliness/liveliness.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StateModule,
    LivelinessModule
  ]
})
export class DashboardModule { }
