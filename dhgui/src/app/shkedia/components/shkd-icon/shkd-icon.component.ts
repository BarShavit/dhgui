import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Component({
  selector: 'app-shkd-icon',
  templateUrl: './shkd-icon.component.html',
  styleUrls: ['./shkd-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShkdIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";
  svgPath: string;

  constructor(private constants: ConstantsService) {
    this.svgPath = this.constants.svgFolder + "/shkd.svg";
  }

  ngOnInit(): void {
  }

}
