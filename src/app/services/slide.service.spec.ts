import { TestBed } from '@angular/core/testing';

import { SlideService } from './slide.service';

describe('SlideService', () => {
  let service: SlideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
