import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentfulService } from './contentful.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContentfulService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ContentfulService = TestBed.inject(ContentfulService);
    expect(service).toBeTruthy();
  });

  it('retrieves content from the API', (waitForAsync(inject( [ContentfulService], ( contentfulService ) => {
    contentfulService.getContentItemByUrl().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }))));
});
