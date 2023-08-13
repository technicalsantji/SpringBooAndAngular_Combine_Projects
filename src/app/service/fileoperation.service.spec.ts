import { TestBed } from '@angular/core/testing';

import { FileoperationService } from './fileoperation.service';

describe('FileoperationService', () => {
  let service: FileoperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileoperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
