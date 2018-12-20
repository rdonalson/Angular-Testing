import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDuplicateElementsComponent } from './reactive-duplicate-elements.component';

describe('ReactiveDuplicateElementsComponent', () => {
  let component: ReactiveDuplicateElementsComponent;
  let fixture: ComponentFixture<ReactiveDuplicateElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDuplicateElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDuplicateElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
