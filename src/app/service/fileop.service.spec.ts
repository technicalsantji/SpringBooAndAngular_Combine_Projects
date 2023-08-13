import { TestBed } from '@angular/core/testing';

import { FileopService } from './fileop.service';

describe('FileopService', () => {
  let service: FileopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
