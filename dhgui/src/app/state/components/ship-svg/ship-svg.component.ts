import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ship-svg',
  templateUrl: './ship-svg.component.html',
  styleUrls: ['./ship-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipSVGComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
