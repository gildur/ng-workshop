import { Injectable } from '@angular/core';
import { Job } from './job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../api/api-response';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private readonly http: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<ApiResponse>('api/jobs').pipe(
      map(response => response._embedded['jobs'])
    );
  }
}
