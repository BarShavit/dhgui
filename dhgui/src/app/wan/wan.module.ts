import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WanComponent } from './components/wan/wan.component';
import { TopologyComponent } from './components/topology/topology.component';
import { TaskForcesComponent } from './components/task-forces/task-forces.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { WanIconComponent } from './components/wan-icon/wan-icon.component';
import { ViewTaskForceComponent } from './components/view-task-force/view-task-force.component';
import { WanMembersViewComponent } from './components/wan-members-view/wan-members-view.component';
import { TaskforceEditComponent } from './components/taskforce-edit/taskforce-edit.component';



@NgModule({
  declarations: [WanComponent, TopologyComponent, TaskForcesComponent, WanIconComponent, ViewTaskForceComponent, WanMembersViewComponent, TaskforceEditComponent],
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
