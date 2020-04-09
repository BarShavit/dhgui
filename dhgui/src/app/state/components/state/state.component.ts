import { Platform } from './../../../shared/models/platform';
import { Component, OnInit } from '@angular/core';
import { Version } from 'src/app/shared/models/version';
import { StateService } from '../../services/state.service';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { TimeService } from 'src/app/shared/services/time.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  version: Version | null;
  platform: Platform | null;

  constructor(private stateService: StateService, private platformService: PlatformService,
    public timeService: TimeService) {
    this.version = new Version();
    this.platform = new Platform();
  }

  async ngOnInit() {
    this.version = await this.stateService.getVersion();
    this.platform = await this.platformService.getMyPlatform();
  }

}
