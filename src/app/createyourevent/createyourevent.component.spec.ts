import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateyoureventComponent } from './createyourevent.component';

describe('CreateyoureventComponent', () => {
  let component: CreateyoureventComponent;
  let fixture: ComponentFixture<CreateyoureventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateyoureventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateyoureventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
