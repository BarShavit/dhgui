import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkdComponent } from './shkd.component';

describe('ShkdComponent', () => {
  let component: ShkdComponent;
  let fixture: ComponentFixture<ShkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
