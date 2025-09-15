import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillChallengesComponent } from './skill-challenges.component';

describe('SkillChallengesComponent', () => {
  let component: SkillChallengesComponent;
  let fixture: ComponentFixture<SkillChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillChallengesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
