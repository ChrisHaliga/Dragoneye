import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGuideComponent } from './player-guide.component';

describe('PlayerGuideComponent', () => {
  let component: PlayerGuideComponent;
  let fixture: ComponentFixture<PlayerGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
