/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RuedaComponent } from './rueda.component';

describe('RuedaComponent', () => {
  let component: RuedaComponent;
  let fixture: ComponentFixture<RuedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
