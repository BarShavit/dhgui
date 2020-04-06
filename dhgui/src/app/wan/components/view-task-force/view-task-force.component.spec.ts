import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskForceComponent } from './view-task-force.component';

describe('ViewTaskForceComponent', () => {
  let component: ViewTaskForceComponent;
  let fixture: ComponentFixture<ViewTaskForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
