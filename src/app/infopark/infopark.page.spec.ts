import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoparkPage } from './infopark.page';

describe('InfoparkPage', () => {
  let component: InfoparkPage;
  let fixture: ComponentFixture<InfoparkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoparkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoparkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
