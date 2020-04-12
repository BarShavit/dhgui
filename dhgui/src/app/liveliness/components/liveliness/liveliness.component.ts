import { SystemLiveliness } from 'src/app/shared/models/system-liveliness';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LivelinessService } from '../../services/liveliness.service';

@Component({
  selector: 'app-liveliness',
  templateUrl: './liveliness.component.html',
  styleUrls: ['./liveliness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivelinessComponent implements OnInit {

  constructor(public livelinessService: LivelinessService) { }

  ngOnInit(): void {
  }

  trackByFunc(_: number, value: SystemLiveliness) {
    return value.systemName;
  }
}
