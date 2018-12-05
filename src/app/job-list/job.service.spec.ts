import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';
import { HttpClient } from '@angular/common/http';

describe('JobService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient },
    ]
  }));

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });
});
