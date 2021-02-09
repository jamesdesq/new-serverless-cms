import { TestBed } from '@angular/core/testing';

import { ScmsComponentLibraryService } from './scms-component-library.service';

describe('ScmsComponentLibraryService', () => {
  let service: ScmsComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScmsComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
