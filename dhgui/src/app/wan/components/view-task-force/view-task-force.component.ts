import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskForce } from 'src/app/shared/models/wan/task-force';

@Component({
  selector: 'app-view-task-force',
  templateUrl: './view-task-force.component.html',
  styleUrls: ['./view-task-force.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTaskForceComponent implements OnInit {

  force: TaskForce;
  title: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: TaskForce) {
    this.force = data;
    this.title = `כוח משימה: ${this.force.name}`;
  }

  ngOnInit(): void {
  }

}
