import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletStepperComponent } from './bullet-stepper.component';

describe('BulletStepperComponent', () => {
  let component: BulletStepperComponent;
  let fixture: ComponentFixture<BulletStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
