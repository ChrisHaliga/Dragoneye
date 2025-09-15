import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCharacterComponent } from './in-character.component';

describe('InCharacterComponent', () => {
  let component: InCharacterComponent;
  let fixture: ComponentFixture<InCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
