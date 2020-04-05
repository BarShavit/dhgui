import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivelinessComponent } from './components/liveliness/liveliness.component';
import { SystemLivelinessComponent } from './components/system-liveliness/system-liveliness.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LivelinessComponent, SystemLivelinessComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LivelinessComponent
  ]
})
export class LivelinessModule { }
