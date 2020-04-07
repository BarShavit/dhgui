import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ShortcutsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ShortcutsComponent
  ]
})
export class ShortcutsModule { }
