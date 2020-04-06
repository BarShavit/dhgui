import { Component, OnInit } from '@angular/core';
import { WanService } from '../../services/wan.service';

@Component({
  selector: 'app-task-forces',
  templateUrl: './task-forces.component.html',
  styleUrls: ['./task-forces.component.scss']
})
export class TaskForcesComponent implements OnInit {

  constructor(public wanService: WanService) { }

  ngOnInit(): void {
  }

}
