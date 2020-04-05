import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanIconComponent } from './wan-icon.component';

describe('WanIconComponent', () => {
  let component: WanIconComponent;
  let fixture: ComponentFixture<WanIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
