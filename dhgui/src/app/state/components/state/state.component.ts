import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../../services/state.service';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { TimeService } from 'src/app/shared/services/time.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateComponent implements OnInit {

  constructor(public stateService: StateService, public platformService: PlatformService,
    public timeService: TimeService) {
  }

  ngOnInit() {
  }

}
