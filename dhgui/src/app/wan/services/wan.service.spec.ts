import { TestBed } from '@angular/core/testing';

import { WanService } from './wan.service';

describe('WanService', () => {
  let service: WanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
