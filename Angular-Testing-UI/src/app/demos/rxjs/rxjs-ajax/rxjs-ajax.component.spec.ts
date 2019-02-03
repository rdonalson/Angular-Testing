import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAjaxComponent } from './rxjs-ajax.component';

describe('RxjsAjaxComponent', () => {
  let component: RxjsAjaxComponent;
  let fixture: ComponentFixture<RxjsAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
