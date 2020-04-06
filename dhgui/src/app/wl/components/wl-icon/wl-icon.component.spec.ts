import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlIconComponent } from './wl-icon.component';

describe('WlIconComponent', () => {
  let component: WlIconComponent;
  let fixture: ComponentFixture<WlIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
