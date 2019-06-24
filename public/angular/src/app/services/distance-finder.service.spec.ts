import { TestBed } from '@angular/core/testing';

import { DistanceFinderService } from './distance-finder.service';

describe('DistanceFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanceFinderService = TestBed.get(DistanceFinderService);
    expect(service).toBeTruthy();
  });
});
