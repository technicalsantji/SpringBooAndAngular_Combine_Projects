import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatternComponent } from './addpattern.component';

describe('AddpatternComponent', () => {
  let component: AddpatternComponent;
  let fixture: ComponentFixture<AddpatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
