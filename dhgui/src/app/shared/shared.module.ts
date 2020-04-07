import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogicalChannelsViewComponent } from './components/logical-channels-view/logical-channels-view.component';

@NgModule({
  declarations: [LogicalChannelsViewComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LogicalChannelsViewComponent
  ]
})
export class SharedModule { }
