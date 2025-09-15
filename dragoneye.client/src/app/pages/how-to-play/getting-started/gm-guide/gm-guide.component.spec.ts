import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmGuideComponent } from './gm-guide.component';

describe('GmGuideComponent', () => {
  let component: GmGuideComponent;
  let fixture: ComponentFixture<GmGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
