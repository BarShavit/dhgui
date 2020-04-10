import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tagam-icon',
  templateUrl: './tagam-icon.component.html',
  styleUrls: ['./tagam-icon.component.scss']
})
export class TagamIconComponent implements OnInit {

  @Input() color: string = "#03a9f4";

  constructor() { }

  ngOnInit(): void {
  }

}
