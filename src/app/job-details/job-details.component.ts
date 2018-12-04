import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JobService } from '../job-list/job.service';
import { switchMap } from 'rxjs/operators';
import { Job } from '../job-list/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job: Job;

  constructor(private readonly route: ActivatedRoute,
              private readonly jobService: JobService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.jobService.getJob(Number(params.get('id'))))
    ).subscribe(job => this.job = job);
  }
}
