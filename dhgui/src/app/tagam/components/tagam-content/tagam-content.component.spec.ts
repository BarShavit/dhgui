import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagamContentComponent } from './tagam-content.component';

describe('TagamContentComponent', () => {
  let component: TagamContentComponent;
  let fixture: ComponentFixture<TagamContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagamContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagamContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
