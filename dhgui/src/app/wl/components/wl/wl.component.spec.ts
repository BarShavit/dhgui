import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlComponent } from './wl.component';

describe('WlComponent', () => {
  let component: WlComponent;
  let fixture: ComponentFixture<WlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
