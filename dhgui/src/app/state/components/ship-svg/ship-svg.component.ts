import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-ship-svg',
  templateUrl: './ship-svg.component.html',
  styleUrls: ['./ship-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipSVGComponent implements OnInit {

  svgPath: string;

  constructor(private constants: ConstantsService) {
    this.svgPath = this.constants.svgFolder + "/logo.svg";
  }

  ngOnInit(): void {
  }

}
