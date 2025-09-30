import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNodeComponent } from './text-node.component';

describe('TextNodeComponent', () => {
  let component: TextNodeComponent;
  let fixture: ComponentFixture<TextNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
