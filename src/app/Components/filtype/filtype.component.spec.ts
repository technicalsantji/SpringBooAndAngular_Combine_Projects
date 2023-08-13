import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltypeComponent } from './filtype.component';

describe('FiltypeComponent', () => {
  let component: FiltypeComponent;
  let fixture: ComponentFixture<FiltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
