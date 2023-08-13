import { TestBed } from '@angular/core/testing';

import { MainuserService } from './mainuser.service';

describe('MainuserService', () => {
  let service: MainuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
