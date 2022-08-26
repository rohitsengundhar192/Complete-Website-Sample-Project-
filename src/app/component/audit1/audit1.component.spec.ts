import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audit1Component } from './audit1.component';

describe('Audit1Component', () => {
  let component: Audit1Component;
  let fixture: ComponentFixture<Audit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Audit1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Audit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
