import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleplayingComponent } from './roleplaying.component';

describe('RoleplayingComponent', () => {
  let component: RoleplayingComponent;
  let fixture: ComponentFixture<RoleplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleplayingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
