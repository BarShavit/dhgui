import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WlComponent } from './components/wl/wl.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { WlIconComponent } from './components/wl-icon/wl-icon.component';



@NgModule({
  declarations: [WlComponent, WlIconComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    WlComponent
  ]
})
export class WLModule { }
