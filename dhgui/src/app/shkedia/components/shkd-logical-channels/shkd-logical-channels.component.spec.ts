import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkdLogicalChannelsComponent } from './shkd-logical-channels.component';

describe('ShkdLogicalChannelsComponent', () => {
  let component: ShkdLogicalChannelsComponent;
  let fixture: ComponentFixture<ShkdLogicalChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkdLogicalChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkdLogicalChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
