import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfChaosComponent } from './age-of-chaos.component';

describe('AgeOfChaosComponent', () => {
  let component: AgeOfChaosComponent;
  let fixture: ComponentFixture<AgeOfChaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeOfChaosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeOfChaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
