import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';
import { HttpClient } from '@angular/common/http';
import { Job } from './job';
import { of } from 'rxjs';
import { ApiResponse } from '../api/api-response';

describe('JobService', () => {

  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpClientSpy },
    ]
  }));

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });

  it('should return jobs', () => {
    const service: JobService = TestBed.get(JobService);
    const expectedJobs: Job[] = [{ id: 1, code: 'test', name: 'Test', description: 'Lorem ipsum', validFrom: '2018-12-05' }];

    const returnedResponse: ApiResponse = { _embedded: { jobs: expectedJobs }, page: null };
    httpClientSpy.get.and.returnValue(of(returnedResponse));

    service.getJobs().subscribe(jobs =>
      expect(jobs).toEqual(expectedJobs),
      fail);

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
