import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SystemLiveliness } from 'src/app/shared/models/system-liveliness';

@Component({
  selector: 'app-system-liveliness',
  templateUrl: './system-liveliness.component.html',
  styleUrls: ['./system-liveliness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemLivelinessComponent implements OnInit {

  @Input() systemLiveliness: SystemLiveliness = new SystemLiveliness();

  constructor() { }

  ngOnInit(): void {
  }

}
