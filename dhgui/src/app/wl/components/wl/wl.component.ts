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

}