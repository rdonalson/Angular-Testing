import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRoundDownComponent } from './date-round-down.component';

describe('DateRoundDownComponent', () => {
  let component: DateRoundDownComponent;
  let fixture: ComponentFixture<DateRoundDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRoundDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRoundDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
