import { WLChannel } from 'src/app/shared/models/wl/wl-channel';
import { Component, OnInit } from '@angular/core';
import { WlService } from '../../services/wl.service';

@Component({
  selector: 'app-wl',
  templateUrl: './wl.component.html',
  styleUrls: ['./wl.component.scss']
})
export class WlComponent implements OnInit {

  constructor(public wlService: WlService) { }

  ngOnInit(): void {
  }

  trackByFunc(_: number, value: WLChannel) {
    return value.name;
  }
}
