import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogicalChannelsViewComponent } from './components/logical-channels-view/logical-channels-view.component';
import { PopupTitleComponent } from './components/popup-title/popup-title.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LogicalChannelsViewComponent, PopupTitleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    LogicalChannelsViewComponent,
    PopupTitleComponent
  ]
})
export class SharedModule { }
