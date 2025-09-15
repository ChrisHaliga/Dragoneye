import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfAscensionComponent } from './age-of-ascension.component';

describe('AgeOfAscensionComponent', () => {
  let component: AgeOfAscensionComponent;
  let fixture: ComponentFixture<AgeOfAscensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgeOfAscensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeOfAscensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
