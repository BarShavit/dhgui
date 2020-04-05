import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLivelinessComponent } from './system-liveliness.component';

describe('SystemLivelinessComponent', () => {
  let component: SystemLivelinessComponent;
  let fixture: ComponentFixture<SystemLivelinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLivelinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLivelinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
