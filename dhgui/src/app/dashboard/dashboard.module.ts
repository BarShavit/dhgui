import { ShortcutsModule } from './../shortcuts/shortcuts.module';
import { TagamModule } from './../tagam/tagam.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { StateModule } from '../state/state.module';
import { LivelinessModule } from '../liveliness/liveliness.module';
import { WanModule } from '../wan/wan.module';
import { WLModule } from '../wl/wl.module';
import { ShkediaModule } from '../shkedia/shkedia.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StateModule,
    LivelinessModule,
    WanModule,
    WLModule,
    TagamModule,
    ShkediaModule,
    ShortcutsModule
  ]
})
export class DashboardModule { }
