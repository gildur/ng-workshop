import { Component, OnInit } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: Job[];

  constructor() { }

  ngOnInit() {
    this.jobs = [
      { code: 'test1', name: 'Test 1', description: 'Lorem ipsum', validFrom: '2018-11-30' },
      { code: 'test2', name: 'Test 2', description: 'Lorem ipsum', validFrom: '2018-12-02' },
      { code: 'test3', name: 'Test 3', description: 'Lorem ipsum', validFrom: '2018-12-06' },
    ];
  }
}
