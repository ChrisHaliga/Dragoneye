import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfOrderComponent } from './age-of-order.component';

describe('AgeOfOrderComponent', () => {
  let component: AgeOfOrderComponent;
  let fixture: ComponentFixture<AgeOfOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeOfOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
