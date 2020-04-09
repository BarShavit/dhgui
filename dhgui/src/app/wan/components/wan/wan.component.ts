import { WanService } from './../../services/wan.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/shared/components/warning/warning.component';
import { TaskforceAddUpdateComponent } from '../taskforce-add-update/taskforce-add-update.component';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-wan',
  templateUrl: './wan.component.html',
  styleUrls: ['./wan.component.scss']
})
export class WanComponent implements OnInit {

  selectedTab: number = 0;
  onOffMenuIcon: string = "";
  onOffMenuTitle: string = "";

  constructor(private wanService: WanService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getOnOffMenuIcon(): string {
    if (this.wanService.isActive) {
      return "airplanemode_active";
    }

    return "airplanemode_inactive";
  }

  getOnOffMenuTitle(): string {
    if (this.wanService.isActive) {
      return "כיבוי תווך";
    }

    return "הפעלת תווך";
  }

  addTaskForce() {
    let config = new MatDialogConfig();
    config.data = null;
    config.width = "350px";

    this.dialog.open(TaskforceAddUpdateComponent, config);
  }

  changeWanStatus() {
    let config = new MatDialogConfig();
    config.data = this.getOnOffWarningMessage();
    config.width = "350px";

    let dialog = this.dialog.open(WarningComponent, config);

    dialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.wanService.changeWanStatus();
    });
  }

  private getOnOffWarningMessage(): string {
    if (this.wanService.isActive) {
      return "האם ברצונך לכבות את התווך?";
    }

    return "האם ברצונך להפעיל את התווך?";
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.selectedTab = 0;
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.selectedTab = 1;
    }
  }
}
