import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHomeComponent } from './crud-home.component';

describe('CrudHomeComponent', () => {
  let component: CrudHomeComponent;
  let fixture: ComponentFixture<CrudHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
