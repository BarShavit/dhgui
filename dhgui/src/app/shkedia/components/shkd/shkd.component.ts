import { ShkdService } from './../../services/shkd.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/shared/components/warning/warning.component';

@Component({
  selector: 'app-shkd',
  templateUrl: './shkd.component.html',
  styleUrls: ['./shkd.component.scss']
})
export class ShkdComponent implements OnInit {

  constructor(public shkdService: ShkdService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getOnOffMenuIcon(): string {
    if (this.shkdService.isActive) {
      return "airplanemode_active";
    }

    return "airplanemode_inactive";
  }

  getOnOffMenuTitle(): string {
    if (this.shkdService.isActive) {
      return "כיבוי תווך";
    }

    return "הפעלת תווך";
  }

  changeShkediaStatus() {
    let config = new MatDialogConfig();
    config.data = this.getOnOffWarningMessage();
    config.width = "350px";

    let dialog = this.dialog.open(WarningComponent, config);

    dialog.afterClosed().toPromise().then(data => {
      if (!data) {
        return;
      }

      this.shkdService.changeShkediaStatus();
    });
  }

  private getOnOffWarningMessage(): string {
    if (this.shkdService.isActive) {
      return "האם ברצונך לכבות את התווך?";
    }

    return "האם ברצונך להפעיל את התווך?";
  }

  getIconColor(): string {
    if (this.shkdService.isActive) {
      return "#03a9f4";
    }

    return "red";
  }
}
