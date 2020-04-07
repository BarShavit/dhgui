import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagamComponent } from './components/tagam/tagam.component';
import { TagamIconComponent } from './components/tagam-icon/tagam-icon.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { TagamContentComponent } from './components/tagam-content/tagam-content.component';

@NgModule({
  declarations: [TagamComponent, TagamIconComponent, TagamContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    TagamComponent
  ]
})
export class TagamModule { }
