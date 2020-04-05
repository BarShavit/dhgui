import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './components/state/state.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ShipSVGComponent } from './components/ship-svg/ship-svg.component';



@NgModule({
  declarations: [StateComponent, ShipSVGComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    StateComponent
  ]
})
export class StateModule { }
