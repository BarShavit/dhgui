import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogicalChannelsViewComponent } from './components/logical-channels-view/logical-channels-view.component';
import { PopupTitleComponent } from './components/popup-title/popup-title.component';
import { MaterialModule } from '../material/material.module';
import { WarningComponent } from './components/warning/warning.component';
import { EditLogicalChannelComponent } from './components/add-logical-channel/edit-logical-channel.component';

@NgModule({
  declarations: [LogicalChannelsViewComponent, PopupTitleComponent, WarningComponent, EditLogicalChannelComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    LogicalChannelsViewComponent,
    PopupTitleComponent,
    WarningComponent,
    EditLogicalChannelComponent
  ]
})
export class SharedModule { }
