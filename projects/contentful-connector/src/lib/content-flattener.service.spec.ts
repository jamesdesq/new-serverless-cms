import { TestBed } from '@angular/core/testing';

import { ContentFlattenerService } from './content-flattener.service';

describe('ContentFlattenerService', () => {
  let service: ContentFlattenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFlattenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
