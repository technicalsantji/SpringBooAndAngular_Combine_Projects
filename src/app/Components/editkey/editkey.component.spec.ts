import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkeyComponent } from './editkey.component';

describe('EditkeyComponent', () => {
  let component: EditkeyComponent;
  let fixture: ComponentFixture<EditkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
