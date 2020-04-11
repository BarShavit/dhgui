import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wan-icon',
  templateUrl: './wan-icon.component.html',
  styleUrls: ['./wan-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WanIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";

  constructor() { }

  ngOnInit(): void {
  }

}
