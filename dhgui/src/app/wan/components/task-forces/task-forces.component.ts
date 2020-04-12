import { TaskforceAddUpdateComponent } from './../taskforce-add-update/taskforce-add-update.component';
import { Component, OnInit } from '@angular/core';
import { WanService } from '../../services/wan.service';
import { TaskForce } from 'src/app/shared/models/wan/task-force';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewTaskForceComponent } from '../view-task-force/view-task-force.component';
import { WarningComponent } from 'src/app/shared/components/warning/warning.component';

@Component({
  selector: 'app-task-forces',
  templateUrl: './task-forces.component.html',
  styleUrls: ['./task-forces.component.scss']
})
export class TaskForcesComponent implements OnInit {

  constructor(public wanService: WanService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewTaskForce(force: TaskForce) {
    let config = new MatDialogConfig();
    config.data = force;
    config.width = "350px";

    this.dialog.open(ViewTaskForceComponent, config);
  }

  editTaskForce(force: TaskForce) {
    let config = new MatDialogConfig();
    config.data = force;
    config.width = "350px";

    this.dialog.open(TaskforceAddUpdateComponent, config);
  }

  leaveTaskForce(force: TaskForce) {
    let config = new MatDialogConfig();
    config.data = `האם ברצונך לעזוב את כוח המשימה "${force.name}"?`;
    config.width = "350px";

    let dialog = this.dialog.open(WarningComponent, config);

    dialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.wanService.leaveTaskForce(force);
    });
  }

  deleteTaskForce(force: TaskForce) {
    let config = new MatDialogConfig();
    config.data = `האם ברצונך למחוק את כוח המשימה "${force.name}"?`;
    config.width = "350px";

    let dialog = this.dialog.open(WarningComponent, config);

    dialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.wanService.deleteTaskForce(force);
    });
  }

  trackByFunc(_: number, value: TaskForce) {
    return value.id;
  }
}
