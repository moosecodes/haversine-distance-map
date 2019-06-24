import { TestBed } from '@angular/core/testing';

import { ReverseEncodeService } from './reverse-encode.service';

describe('ReverseEncodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReverseEncodeService = TestBed.get(ReverseEncodeService);
    expect(service).toBeTruthy();
  });
});
