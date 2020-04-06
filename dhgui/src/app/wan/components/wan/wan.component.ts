import { Component, OnInit, HostListener } from '@angular/core';

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

  public selectedTab: number = 0;

  constructor() { }

  ngOnInit(): void {
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
