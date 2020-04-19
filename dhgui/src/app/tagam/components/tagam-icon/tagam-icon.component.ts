import { ConstantsService } from 'src/app/shared/services/constants.service';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tagam-icon',
  templateUrl: './tagam-icon.component.html',
  styleUrls: ['./tagam-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagamIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";
  svgPath: string;

  constructor(private constants: ConstantsService) {
    this.svgPath = this.constants.svgFolder + "/tagam.svg";
  }

  ngOnInit(): void {
  }

}
