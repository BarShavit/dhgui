import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shkd-icon',
  templateUrl: './shkd-icon.component.html',
  styleUrls: ['./shkd-icon.component.scss']
})
export class ShkdIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";

  constructor() { }

  ngOnInit(): void {
  }

}
