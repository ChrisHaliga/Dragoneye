import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBattlefieldComponent } from './the-battlefield.component';

describe('TheBattlefieldComponent', () => {
  let component: TheBattlefieldComponent;
  let fixture: ComponentFixture<TheBattlefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheBattlefieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
