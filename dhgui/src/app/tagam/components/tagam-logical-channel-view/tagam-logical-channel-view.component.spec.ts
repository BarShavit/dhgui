import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagamLogicalChannelViewComponent } from './tagam-logical-channel-view.component';

describe('TagamLogicalChannelViewComponent', () => {
  let component: TagamLogicalChannelViewComponent;
  let fixture: ComponentFixture<TagamLogicalChannelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagamLogicalChannelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagamLogicalChannelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
