import { Injectable } from '@angular/core';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() {
  }

  getJobs(): Job[] {
    return [
      { code: 'test1', name: 'Test 1', description: 'Lorem ipsum', validFrom: '2018-11-30' },
      { code: 'test2', name: 'Test 2', description: 'Lorem ipsum', validFrom: '2018-12-02' },
      { code: 'test3', name: 'Test 3', description: 'Lorem ipsum', validFrom: '2018-12-06' },
    ];
  }
}
