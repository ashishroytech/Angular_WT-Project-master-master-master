import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Event1Component } from './event1.component';

describe('Event1Component', () => {
  let component: Event1Component;
  let fixture: ComponentFixture<Event1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Event1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Event1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
