import { TestBed } from '@angular/core/testing';

import { LivelinessService } from './liveliness.service';

describe('LivelinessService', () => {
  let service: LivelinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivelinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
