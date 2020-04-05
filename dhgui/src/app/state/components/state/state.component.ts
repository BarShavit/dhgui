import { Component, OnInit } from '@angular/core';
import { Version } from 'src/app/shared/models/version';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  version: Version;

  constructor(private stateService: StateService) { }

  async ngOnInit() {
    this.version = await this.stateService.getVersion();
  }

}
