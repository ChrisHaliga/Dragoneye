import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAndProgressionComponent } from './stats-and-progression.component';

describe('StatsAndProgressionComponent', () => {
  let component: StatsAndProgressionComponent;
  let fixture: ComponentFixture<StatsAndProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsAndProgressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsAndProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
