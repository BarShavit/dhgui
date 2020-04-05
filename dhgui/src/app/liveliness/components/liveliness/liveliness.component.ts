import { Component, OnInit } from '@angular/core';
import { LivelinessService } from '../../services/liveliness.service';

@Component({
  selector: 'app-liveliness',
  templateUrl: './liveliness.component.html',
  styleUrls: ['./liveliness.component.scss']
})
export class LivelinessComponent implements OnInit {

  constructor(public livelinessService : LivelinessService) { }

  ngOnInit(): void {
  }

}
