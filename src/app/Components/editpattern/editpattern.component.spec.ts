import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatternComponent } from './editpattern.component';

describe('EditpatternComponent', () => {
  let component: EditpatternComponent;
  let fixture: ComponentFixture<EditpatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
