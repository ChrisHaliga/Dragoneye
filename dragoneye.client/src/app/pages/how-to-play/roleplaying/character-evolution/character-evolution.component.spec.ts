import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEvolutionComponent } from './character-evolution.component';

describe('CharacterEvolutionComponent', () => {
  let component: CharacterEvolutionComponent;
  let fixture: ComponentFixture<CharacterEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterEvolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
