import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfCharacterComponent } from './out-of-character.component';

describe('OutOfCharacterComponent', () => {
  let component: OutOfCharacterComponent;
  let fixture: ComponentFixture<OutOfCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutOfCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
