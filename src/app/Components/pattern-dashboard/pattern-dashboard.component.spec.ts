import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDashboardComponent } from './pattern-dashboard.component';

describe('PatternDashboardComponent', () => {
  let component: PatternDashboardComponent;
  let fixture: ComponentFixture<PatternDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
