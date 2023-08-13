import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementsComponent } from './content-managements.component';

describe('ContentManagementsComponent', () => {
  let component: ContentManagementsComponent;
  let fixture: ComponentFixture<ContentManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
