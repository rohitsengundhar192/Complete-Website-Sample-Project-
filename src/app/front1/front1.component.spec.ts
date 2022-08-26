import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Front1Component } from './front1.component';

describe('Front1Component', () => {
  let component: Front1Component;
  let fixture: ComponentFixture<Front1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Front1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Front1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
