import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipSVGComponent } from './ship-svg.component';

describe('ShipSVGComponent', () => {
  let component: ShipSVGComponent;
  let fixture: ComponentFixture<ShipSVGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipSVGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
