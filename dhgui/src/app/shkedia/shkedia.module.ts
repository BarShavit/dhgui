import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShkdComponent } from './components/shkd/shkd.component';
import { ShkdIconComponent } from './components/shkd-icon/shkd-icon.component';
import { ShkdContentComponent } from './components/shkd-content/shkd-content.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ShkdTopologyViewComponent } from './components/shkd-topology-view/shkd-topology-view.component';

@NgModule({
  declarations: [ShkdComponent, ShkdIconComponent, ShkdContentComponent, ShkdTopologyViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ShkdComponent
  ]
})
export class ShkediaModule { }
