import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObservablesComponent } from './rxjs-observables.component';

describe('RxjsObservablesComponent', () => {
  let component: RxjsObservablesComponent;
  let fixture: ComponentFixture<RxjsObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
