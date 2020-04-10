import { LogicalChannelResult } from './../../models/common/logical-channel-result';
import { LogicalChannelPopupInit } from './../../models/common/logical-channel-init';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogicalChannel } from 'src/app/shared/models/common/logical-channel';
import { ChannelState } from 'src/app/shared/models/common/channel-status';
import { EditLogicalChannelComponent } from '../add-logical-channel/edit-logical-channel.component';
import { } from 'protractor';

@Component({
  selector: 'app-logical-channels-view',
  templateUrl: './logical-channels-view.component.html',
  styleUrls: ['./logical-channels-view.component.scss']
})
export class LogicalChannelsViewComponent implements OnInit {

  @Input() channels: LogicalChannel[] = [];
  @Input() state: ChannelState = ChannelState.Failure;
  @Input() showManagement: boolean = false;

  @Output() addChannel = new EventEmitter<LogicalChannelResult>();
  @Output() editChannel = new EventEmitter<LogicalChannelResult>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  create() {
    let title = `הוספת ערוץ לוגי`

    let config = new MatDialogConfig();
    config.data = new LogicalChannelPopupInit(title, true, null);
    config.width = "350px";

    let addDialog = this.dialog.open(EditLogicalChannelComponent, config);

    addDialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.addChannel.emit(data);
    });
  }

  editLogicalChannel(channel: LogicalChannel) {
    let title = `עריכת ערוץ לוגי`

    let config = new MatDialogConfig();
    config.data = new LogicalChannelPopupInit(title, false, channel);
    config.width = "350px";

    let editDialog = this.dialog.open(EditLogicalChannelComponent, config);

    editDialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.editChannel.emit(data);
    });
  }
}
