import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WanComponent } from './components/wan/wan.component';
import { TopologyComponent } from './components/topology/topology.component';
import { TaskForcesComponent } from './components/task-forces/task-forces.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { WanIconComponent } from './components/wan-icon/wan-icon.component';



@NgModule({
  declarations: [WanComponent, TopologyComponent, TaskForcesComponent, WanIconComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    WanComponent
  ]
})
export class WanModule { }
