import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-wl-icon',
  templateUrl: './wl-icon.component.html',
  styleUrls: ['./wl-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WlIconComponent implements OnInit {

  svgPath: string;

  constructor(private constants: ConstantsService) {
    this.svgPath = this.constants.svgFolder + "/wl.svg";
  }

  ngOnInit(): void {
  }

}
