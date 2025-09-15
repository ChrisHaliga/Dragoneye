import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlottingAndMotivationsComponent } from './plotting-and-motivations.component';

describe('PlottingAndMotivationsComponent', () => {
  let component: PlottingAndMotivationsComponent;
  let fixture: ComponentFixture<PlottingAndMotivationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlottingAndMotivationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlottingAndMotivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
