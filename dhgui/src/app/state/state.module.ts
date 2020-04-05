import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './components/state/state.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [StateComponent],
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
