import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagamComponent } from './tagam.component';

describe('TagamComponent', () => {
  let component: TagamComponent;
  let fixture: ComponentFixture<TagamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
