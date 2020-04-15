import { TagamService } from './../../services/tagam.service';
import { TagamPhysicalChannel } from 'src/app/shared/models/tagam/physical-channel';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-type',
  templateUrl: './change-type.component.html',
  styleUrls: ['./change-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeTypeComponent implements OnInit {

  channel: TagamPhysicalChannel;
  title: string;
  selectedType: string;

  constructor(public tagamService: TagamService,
    private dialogRef: MatDialogRef<ChangeTypeComponent>,
    @Inject(MAT_DIALOG_DATA) data: TagamPhysicalChannel) {
    this.channel = data;
    this.selectedType = this.channel.type;
    this.title = `עדכון סוג ערוץ ל${this.channel.computerName} ערוץ ${this.channel.channelId}`;
  }

  ngOnInit(): void {
  }

  updateChannel() {
    this.tagamService.changeChannelType(this.channel, this.selectedType);
    this.dialogRef.close(true);
  }
}