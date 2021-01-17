import { TestBed } from '@angular/core/testing';

import { IncludesFinderService } from './includes-finder.service';

describe('IncludesFinderService', () => {
  let service: IncludesFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncludesFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
