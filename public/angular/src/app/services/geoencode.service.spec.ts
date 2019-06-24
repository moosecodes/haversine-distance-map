import { TestBed } from '@angular/core/testing';

import { GeoencodeService } from './geoencode.service';

describe('GeoencodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoencodeService = TestBed.get(GeoencodeService);
    expect(service).toBeTruthy();
  });
});
