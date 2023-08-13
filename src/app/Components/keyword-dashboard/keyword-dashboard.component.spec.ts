import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordDashboardComponent } from './keyword-dashboard.component';

describe('KeywordDashboardComponent', () => {
  let component: KeywordDashboardComponent;
  let fixture: ComponentFixture<KeywordDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
