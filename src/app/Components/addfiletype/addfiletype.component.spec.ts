import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfiletypeComponent } from './addfiletype.component';

describe('AddfiletypeComponent', () => {
  let component: AddfiletypeComponent;
  let fixture: ComponentFixture<AddfiletypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfiletypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfiletypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
