import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubscriptionsComponent } from './rxjs-subscriptions.component';

describe('RxjsSubscriptionsComponent', () => {
  let component: RxjsSubscriptionsComponent;
  let fixture: ComponentFixture<RxjsSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
