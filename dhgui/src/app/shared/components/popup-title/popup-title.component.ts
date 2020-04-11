import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-popup-title',
  templateUrl: './popup-title.component.html',
  styleUrls: ['./popup-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupTitleComponent implements OnInit {

  @Input() iconName: string = "";
  @Input() title: string = "";
  @Input() textAlign: string = "center";
  @Input() color: string = "#00aeff";

  constructor() { }

  ngOnInit(): void {
  }

}
