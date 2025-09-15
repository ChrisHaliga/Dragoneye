import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionCardsComponent } from './resolution-cards.component';

describe('ResolutionCardsComponent', () => {
  let component: ResolutionCardsComponent;
  let fixture: ComponentFixture<ResolutionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResolutionCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
