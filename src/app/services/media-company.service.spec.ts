import { TestBed } from '@angular/core/testing';

import { MediaCompanyService } from './media-company.service';

describe('MediaCompanyService', () => {
  let service: MediaCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
