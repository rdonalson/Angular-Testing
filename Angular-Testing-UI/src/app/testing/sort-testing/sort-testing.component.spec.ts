import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTestingComponent } from './sort-testing.component';

describe('SortTestingComponent', () => {
  let component: SortTestingComponent;
  let fixture: ComponentFixture<SortTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
