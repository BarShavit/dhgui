import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShkdContentComponent } from './shkd-content.component';

describe('ShkdContentComponent', () => {
  let component: ShkdContentComponent;
  let fixture: ComponentFixture<ShkdContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShkdContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShkdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
