import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTestingComponent } from './bookmark-testing.component';

describe('BookmarkTestingComponent', () => {
  let component: BookmarkTestingComponent;
  let fixture: ComponentFixture<BookmarkTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
