import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkdTopologyViewComponent } from './shkd-topology-view.component';

describe('ShkdTopologyViewComponent', () => {
  let component: ShkdTopologyViewComponent;
  let fixture: ComponentFixture<ShkdTopologyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkdTopologyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkdTopologyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
