import { Component, OnInit } from '@angular/core';
import { Job } from './job';
import { JobService } from './job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobs: Job[];

  constructor(private readonly jobService: JobService,
              private readonly router: Router) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  selectJob(job: Job) {
    this.router.navigateByUrl(`/jobs/${job.id}`);
  }
}
