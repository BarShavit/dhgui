import { ShkediaChannel } from './../../../shared/models/shkd/shkedia-channel';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shkd-topology-view',
  templateUrl: './shkd-topology-view.component.html',
  styleUrls: ['./shkd-topology-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShkdTopologyViewComponent implements OnInit {

  channel: ShkediaChannel;
  title: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: ShkediaChannel) {
    this.channel = data;
    this.title = `טופולוגיית ערוץ ${this.channel.channelId}`;
  }

  ngOnInit(): void {
  }

}
