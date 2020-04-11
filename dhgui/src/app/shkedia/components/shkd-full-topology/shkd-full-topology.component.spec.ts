import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkdFullTopologyComponent } from './shkd-full-topology.component';

describe('ShkdFullTopologyComponent', () => {
  let component: ShkdFullTopologyComponent;
  let fixture: ComponentFixture<ShkdFullTopologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkdFullTopologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkdFullTopologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
