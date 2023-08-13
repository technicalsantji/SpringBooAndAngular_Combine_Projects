import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltypeDashboardComponent } from './filtype-dashboard.component';

describe('FiltypeDashboardComponent', () => {
  let component: FiltypeDashboardComponent;
  let fixture: ComponentFixture<FiltypeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltypeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltypeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
