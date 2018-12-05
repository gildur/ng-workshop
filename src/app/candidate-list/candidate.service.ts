import { Injectable } from '@angular/core';
import { Job } from '../job-list/job';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../api/api-response';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private readonly http: HttpClient) { }

  getCandidates(job: Job, page: number, size: number): Observable<ApiResponse> {
    let url = 'candidates';
    let params = new HttpParams();
    if (job) {
      params = params.set('jobId', job.id.toString());
      url += '/search/findByJobId';
    }
    params = params.set('page', page.toString());
    params = params.set('size', size.toString());
    return this.http.get<ApiResponse>(url,
      { params: params });
  }
}
