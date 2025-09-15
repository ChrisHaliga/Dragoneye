import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeStorytellingComponent } from './collaborative-storytelling.component';

describe('CollaborativeStorytellingComponent', () => {
  let component: CollaborativeStorytellingComponent;
  let fixture: ComponentFixture<CollaborativeStorytellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaborativeStorytellingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborativeStorytellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
