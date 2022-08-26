import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticountryComponent } from './multicountry.component';

describe('MulticountryComponent', () => {
  let component: MulticountryComponent;
  let fixture: ComponentFixture<MulticountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
