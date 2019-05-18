import { TestBed } from '@angular/core/testing';

import { RedditFetcherService } from './reddit-fetcher.service';

describe('RedditFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditFetcherService = TestBed.get(RedditFetcherService);
    expect(service).toBeTruthy();
  });
});
