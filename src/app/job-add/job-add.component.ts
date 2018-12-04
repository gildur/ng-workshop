import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../job-list/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent implements OnInit {

  addForm = this.formBuilder.group({
    code: ['', [Validators.required, Validators.minLength(3)]],
    name: ['', [Validators.required, Validators.minLength(5)]],
    description: [''],
    validFrom: ['', [Validators.required]]
  });

  constructor(private readonly formBuilder: FormBuilder,
              private readonly jobService: JobService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  addJob() {
    this.jobService.addJob(this.addForm.value).subscribe(() => this.router.navigateByUrl('/jobs'));
  }
}
