import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureOverviewComponent } from './culture-overview.component';

describe('CultureOverviewComponent', () => {
  let component: CultureOverviewComponent;
  let fixture: ComponentFixture<CultureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CultureOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
