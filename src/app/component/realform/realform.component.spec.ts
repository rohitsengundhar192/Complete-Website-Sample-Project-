import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealformComponent } from './realform.component';

describe('RealformComponent', () => {
  let component: RealformComponent;
  let fixture: ComponentFixture<RealformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
