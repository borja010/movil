import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValePage } from './vale.page';

describe('ValePage', () => {
  let component: ValePage;
  let fixture: ComponentFixture<ValePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
