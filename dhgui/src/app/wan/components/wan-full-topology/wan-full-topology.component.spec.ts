import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanFullTopologyComponent } from './wan-full-topology.component';

describe('WanFullTopologyComponent', () => {
  let component: WanFullTopologyComponent;
  let fixture: ComponentFixture<WanFullTopologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanFullTopologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanFullTopologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
