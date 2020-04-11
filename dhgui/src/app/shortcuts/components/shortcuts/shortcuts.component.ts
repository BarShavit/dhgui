import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortcutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
