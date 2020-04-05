import { Component, OnInit, Input } from '@angular/core';
import { SystemLiveliness } from 'src/app/shared/models/system-liveliness';

@Component({
  selector: 'app-system-liveliness',
  templateUrl: './system-liveliness.component.html',
  styleUrls: ['./system-liveliness.component.scss']
})
export class SystemLivelinessComponent implements OnInit {

  @Input() systemLiveliness : SystemLiveliness;

  constructor() { }

  ngOnInit(): void {
  }

}
