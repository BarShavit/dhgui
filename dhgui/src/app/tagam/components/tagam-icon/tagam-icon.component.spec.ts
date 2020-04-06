import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagamIconComponent } from './tagam-icon.component';

describe('TagamIconComponent', () => {
  let component: TagamIconComponent;
  let fixture: ComponentFixture<TagamIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagamIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagamIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
