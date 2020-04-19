import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-wan-icon',
  templateUrl: './wan-icon.component.html',
  styleUrls: ['./wan-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WanIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";
  svgPath: string;

  constructor(private constants: ConstantsService) {
    this.svgPath = this.constants.svgFolder + "/wan.svg";
  }

  ngOnInit(): void {
  }

}
