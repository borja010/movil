import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogaPage } from './analoga.page';

describe('AnalogaPage', () => {
  let component: AnalogaPage;
  let fixture: ComponentFixture<AnalogaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalogaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
