import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsAndPassivesComponent } from './actions-and-passives.component';

describe('ActionsAndPassivesComponent', () => {
  let component: ActionsAndPassivesComponent;
  let fixture: ComponentFixture<ActionsAndPassivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionsAndPassivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsAndPassivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
