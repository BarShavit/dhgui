import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shkd-icon',
  templateUrl: './shkd-icon.component.html',
  styleUrls: ['./shkd-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShkdIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";

  constructor() { }

  ngOnInit(): void {
  }

}
