import { TagamService } from './../../services/tagam.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/shared/components/warning/warning.component';

@Component({
  selector: 'app-tagam',
  templateUrl: './tagam.component.html',
  styleUrls: ['./tagam.component.scss']
})
export class TagamComponent implements OnInit {

  constructor(public tagamService: TagamService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getOnOffMenuTitle(): string {
    if (this.tagamService.isActive) {
      return "כיבוי תווך";
    }

    return "הפעלת תווך";
  }

  getOnOffMenuIcon(): string {
    if (this.tagamService.isActive) {
      return "airplanemode_active";
    }

    return "airplanemode_inactive";
  }


  private getOnOffWarningMessage(): string {
    if (this.tagamService.isActive) {
      return "האם ברצונך לכבות את התווך?";
    }

    return "האם ברצונך להפעיל את התווך?";
  }

  changeTagamStatus() {
    let config = new MatDialogConfig();
    config.data = this.getOnOffWarningMessage();
    config.width = "350px";

    let openDialog = this.dialog.open(WarningComponent, config);

    openDialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.tagamService.changeTagamStatus();
    });
  }

  getIconColor(): string {
    if (this.tagamService.isActive) {
      return "#03a9f4";
    }

    return "red";
  }
}
