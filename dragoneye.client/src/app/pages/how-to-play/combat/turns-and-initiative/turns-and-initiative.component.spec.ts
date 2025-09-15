import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnsAndInitiativeComponent } from './turns-and-initiative.component';

describe('TurnsAndInitiativeComponent', () => {
  let component: TurnsAndInitiativeComponent;
  let fixture: ComponentFixture<TurnsAndInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurnsAndInitiativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnsAndInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
