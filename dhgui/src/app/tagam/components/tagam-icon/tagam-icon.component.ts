import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tagam-icon',
  templateUrl: './tagam-icon.component.html',
  styleUrls: ['./tagam-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagamIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";

  constructor() { }

  ngOnInit(): void {
  }

}
