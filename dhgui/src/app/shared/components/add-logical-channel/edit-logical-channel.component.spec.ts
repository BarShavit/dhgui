import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogicalChannelComponent } from './edit-logical-channel.component';

describe('AddLogicalChannelComponent', () => {
  let component: EditLogicalChannelComponent;
  let fixture: ComponentFixture<EditLogicalChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLogicalChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLogicalChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
