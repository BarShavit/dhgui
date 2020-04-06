import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskForce } from 'src/app/shared/models/wan/task-force';

@Component({
  selector: 'app-view-task-force',
  templateUrl: './view-task-force.component.html',
  styleUrls: ['./view-task-force.component.scss']
})
export class ViewTaskForceComponent implements OnInit {

  force: TaskForce;

  constructor(private dialogRef: MatDialogRef<ViewTaskForceComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.force = data;
  }

  ngOnInit(): void {
  }

}