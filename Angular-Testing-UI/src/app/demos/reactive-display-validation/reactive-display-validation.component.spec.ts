import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDisplayValidationComponent } from './reactive-display-validation.component';

describe('ReactiveDisplayValidationComponent', () => {
  let component: ReactiveDisplayValidationComponent;
  let fixture: ComponentFixture<ReactiveDisplayValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDisplayValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDisplayValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
