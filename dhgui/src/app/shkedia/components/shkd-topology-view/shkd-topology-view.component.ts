import { ShkediaChannel } from './../../../shared/models/shkd/shkedia-channel';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shkd-topology-view',
  templateUrl: './shkd-topology-view.component.html',
  styleUrls: ['./shkd-topology-view.component.scss']
})
export class ShkdTopologyViewComponent implements OnInit {

  public channel: ShkediaChannel;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.channel = data;
  }

  ngOnInit(): void {
  }

}
