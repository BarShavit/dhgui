import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanMembersViewComponent } from './wan-members-view.component';

describe('WanMembersViewComponent', () => {
  let component: WanMembersViewComponent;
  let fixture: ComponentFixture<WanMembersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanMembersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanMembersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
