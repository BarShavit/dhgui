import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkdIconComponent } from './shkd-icon.component';

describe('ShkdIconComponent', () => {
  let component: ShkdIconComponent;
  let fixture: ComponentFixture<ShkdIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkdIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkdIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
