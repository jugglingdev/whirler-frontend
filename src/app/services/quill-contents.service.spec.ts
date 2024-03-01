import { TestBed } from '@angular/core/testing';

import { QuillContentsService } from './quill-contents.service';

describe('QuillContentsService', () => {
  let service: QuillContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
