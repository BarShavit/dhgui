import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskforceEditComponent } from './taskforce-edit.component';

describe('TaskforceEditComponent', () => {
  let component: TaskforceEditComponent;
  let fixture: ComponentFixture<TaskforceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskforceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskforceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
