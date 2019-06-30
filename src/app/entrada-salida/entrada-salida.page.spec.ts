import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaSalidaPage } from './entrada-salida.page';

describe('EntradaSalidaPage', () => {
  let component: EntradaSalidaPage;
  let fixture: ComponentFixture<EntradaSalidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaSalidaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaSalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
