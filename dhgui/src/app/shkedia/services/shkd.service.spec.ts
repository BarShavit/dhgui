import { TestBed } from '@angular/core/testing';

import { ShkdService } from './shkd.service';

describe('ShkdService', () => {
  let service: ShkdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShkdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
