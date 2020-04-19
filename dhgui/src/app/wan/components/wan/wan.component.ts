import { BehaviorSubject } from 'rxjs';
import { WanFullTopologyComponent } from './../wan-full-topology/wan-full-topology.component';
import { WanService } from './../../services/wan.service';
import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  styleUrls: ['./wan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WanComponent implements OnInit, AfterViewInit {

  selectedTab: number = 0;
  onOffMenuIcon: string = "";
  onOffMenuTitle: string = "";
  tabsOverflow$ = new BehaviorSubject<boolean>(false);
  @ViewChild("tabs", { read: ElementRef }) tabsElement: ElementRef | null = null;

  constructor(public wanService: WanService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.tabsOverflow$.next(this.tabsOverflow());
  }

  getOnOffMenuIcon(): string {
    if (this.wanService.isActive$.value) {
      return "airplanemode_active";
    }

    return "airplanemode_inactive";
  }

  getOnOffMenuTitle(): string {
    if (this.wanService.isActive$.value) {
      return "כיבוי תווך";
    }

    return "הפעלת תווך";
  }

  fullTopology() {
    let config = new MatDialogConfig();
    config.width = "350px";

    this.dialog.open(WanFullTopologyComponent, config);
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
    if (this.wanService.isActive$.value) {
      return "האם ברצונך לכבות את התווך?";
    }

    return "האם ברצונך להפעיל את התווך?";
  }

  getIconColor(): string {
    if (this.wanService.isActive$.value) {
      return "#03a9f4";
    }

    return "red";
  }

  private tabsOverflow(): boolean {
    if (this.tabsElement == null || this.tabsElement.nativeElement == null) {
      return false;
    }

    // Take the native element of the header only
    // We can't do viewchild on inner angular material component without it
    const nativeElement = this.tabsElement.nativeElement.childNodes[0];
    return nativeElement.classList.length == 3;
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

  @HostListener('window:resize')
  public detectResize(): void {
    // This event fire before the gui rerender. So we give him 300ms
    // and then check if the tabs overflow now
    setTimeout(() => {
      this.tabsOverflow$.next(this.tabsOverflow());
    }, 300)
    
  }
}
