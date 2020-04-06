import { TestBed } from '@angular/core/testing';

import { TagamService } from './tagam.service';

describe('TagamService', () => {
  let service: TagamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
