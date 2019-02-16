import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesTestingComponent } from './utilities-testing.component';

describe('UtilitiesTestingComponent', () => {
  let component: UtilitiesTestingComponent;
  let fixture: ComponentFixture<UtilitiesTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
