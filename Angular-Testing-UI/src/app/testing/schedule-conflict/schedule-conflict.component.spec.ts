import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleConflictComponent } from './schedule-conflict.component';

describe('ScheduleConflictComponent', () => {
  let component: ScheduleConflictComponent;
  let fixture: ComponentFixture<ScheduleConflictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleConflictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
