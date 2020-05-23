import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpHomeComponent } from './amp-home.component';

describe('AmpHomeComponent', () => {
  let component: AmpHomeComponent;
  let fixture: ComponentFixture<AmpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
