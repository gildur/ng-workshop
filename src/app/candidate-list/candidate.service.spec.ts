import { TestBed } from '@angular/core/testing';

import { CandidateService } from './candidate.service';
import { HttpClient } from '@angular/common/http';

describe('CandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient },
    ]
  }));

  it('should be created', () => {
    const service: CandidateService = TestBed.get(CandidateService);
    expect(service).toBeTruthy();
  });
});
