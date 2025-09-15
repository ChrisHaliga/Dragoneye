import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMechanicsComponent } from './core-mechanics.component';

describe('CoreMechanicsComponent', () => {
  let component: CoreMechanicsComponent;
  let fixture: ComponentFixture<CoreMechanicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreMechanicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
