import { TagamPhysicalChannel } from 'src/app/shared/models/tagam/physical-channel';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyErrorStateMatcher } from 'src/app/shared/services/error-state-matcher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogicalChannelPopupInit } from '../../models/common/logical-channel-init';
import { LogicalChannelResult } from '../../models/common/logical-channel-result';
import { WarningComponent } from '../warning/warning.component';

@Component({
  selector: 'app-edit-logical-channel',
  templateUrl: './edit-logical-channel.component.html',
  styleUrls: ['./edit-logical-channel.component.scss']
})
export class EditLogicalChannelComponent implements OnInit {

  title: string;
  isAdd: boolean;
  matcher = new MyErrorStateMatcher();
  form: FormGroup;
  sourceChannelName: string;

  constructor(fb: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<EditLogicalChannelComponent>,
    @Inject(MAT_DIALOG_DATA) data: LogicalChannelPopupInit) {
    this.title = data.title;
    this.isAdd = data.isAdd;
    this.sourceChannelName = data.sourceChannelName;

    this.form = fb.group({
      'name': ['', [Validators.required, Validators.maxLength(16)]],
      'state': ['', [Validators.required]]
    }, {});
  }

  ngOnInit(): void {
  }

  create() {
    this.dialogRef.close(new LogicalChannelResult(this.form.controls['name'].value,
      +this.form.controls['state'].value));
  }

  update() {
    this.dialogRef.close(new LogicalChannelResult(this.form.controls['name'].value,
      +this.form.controls['state'].value));
  }

  delete() {
    let config = new MatDialogConfig();
    config.data = `האם ברצונך למחוק את הערוץ הלוגי ${this.form.controls['name'].value}?`
    config.width = "350px";

    let dialog = this.dialog.open(WarningComponent, config);

    dialog.afterClosed().toPromise().then(data => {
      if (!data) {
        this.dialogRef.close(null);
      } else {
        this.dialogRef.close(new LogicalChannelResult(this.form.controls['name'].value,
          +this.form.controls['state'].value));
      }
    });
  }

  canDelete(): boolean {
    return this.form.controls['name'].value == this.sourceChannelName;
  }

}