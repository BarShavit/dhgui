import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningComponent implements OnInit {

  warningMessage: string;

  constructor(private dialogRef: MatDialogRef<WarningComponent>,
    @Inject(MAT_DIALOG_DATA) data: string) {
    this.warningMessage = data;
  }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
